"use client";

import { useState } from "react";
import { ContactFormData } from "@/types/contact";
import { PORTFOLIO_OWNER } from "@/lib/constants";

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: "Integración .NET / C#",
    budgetRange: "$10k - $25k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name.trim().length >= 2 &&
    formData.email.includes("@") &&
    formData.email.includes(".") &&
    formData.message.trim().length >= 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Envío al backend de Next.js
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || (data && !data.success)) {
        throw new Error(data?.error || "Error al procesar la solicitud.");
      }

      setSubmittedSuccess(true);
    } catch (err: any) {
      console.error("Error al enviar formulario:", err);
      // Abrir directamente cliente de correo preconfigurado para garantizar 100% que el mensaje no se pierda
      triggerDirectMailto();
      setSubmittedSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerDirectMailto = () => {
    const subject = encodeURIComponent(`Consulta de Proyecto: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hola Efraín,\n\nMi nombre es ${formData.name} (${formData.email}).\nEmpresa: ${formData.company || "N/A"}\nProyecto: ${formData.projectType}\nPresupuesto: ${formData.budgetRange}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_OWNER.email}?subject=${subject}&body=${body}`;
  };

  return {
    formData,
    isSubmitting,
    submittedSuccess,
    errorMessage,
    isFormValid,
    updateField,
    handleSubmit,
    triggerDirectMailto,
    resetSuccessState: () => setSubmittedSuccess(false),
  };
}
