"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useContactForm } from "@/hooks/useContactForm";
import { Mail, CheckCircle2, Send, Linkedin, ExternalLink } from "lucide-react";
import { PORTFOLIO_OWNER } from "@/lib/constants";

export function ContactModal() {
  const { isContactOpen, closeContact } = usePortfolioStore();

  const {
    formData,
    isSubmitting,
    submittedSuccess,
    errorMessage,
    isFormValid,
    updateField,
    handleSubmit,
    triggerDirectMailto,
    resetSuccessState,
  } = useContactForm();

  return (
    <Modal
      isOpen={isContactOpen}
      onClose={closeContact}
      title="Iniciar Proyecto o Consulta Técnica"
      maxWidth="lg"
    >
      {submittedSuccess ? (
        <div className="text-center py-8 space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-glow">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">¡Solicitud Procesada Exitosamente!</h3>
          <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
            Tu información ha sido registrada para <strong className="text-emerald-300 font-mono">efraingon@gmail.com</strong>.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={triggerDirectMailto}
              className="text-xs w-full sm:w-auto"
            >
              <Mail className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              <span>Abrir en mi Correo</span>
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                resetSuccessState();
                closeContact();
              }}
              className="w-full sm:w-auto"
            >
              Cerrar
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Header Indicador del Correo Destino */}
          <div className="p-3 rounded-xl bg-petroleum-950/90 border border-brand-500/30 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Mail className="w-4 h-4 text-emerald-400" />
              Destino Directo:
            </span>
            <a
              href={`mailto:${PORTFOLIO_OWNER.email}`}
              className="font-mono text-emerald-300 hover:underline font-bold"
            >
              efraingon@gmail.com
            </a>
          </div>

          <Input
            label="Tu Nombre Completo"
            placeholder="Ej. Ana Beltrán"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
          />

          <Input
            label="Tu Correo Electrónico"
            type="email"
            placeholder="ana@empresa.com"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Tipo de Proyecto
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-petroleum-950 border border-brand-500/30 text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="Integración .NET / C#">Integración .NET / C#</option>
                <option value="Optimización SQL Server">Optimización SQL Server</option>
                <option value="Sistema VUCE / ERP / Bancario">Sistema VUCE / ERP / Bancario</option>
                <option value="Dashboards Power BI">Dashboards Power BI</option>
                <option value="Firma Electrónica">Firma Electrónica</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Rango Presupuesto
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => updateField("budgetRange", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-petroleum-950 border border-brand-500/30 text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="< $5k">Menos de $5k USD</option>
                <option value="$5k - $15k">$5k - $15k USD</option>
                <option value="$15k - $30k">$15k - $30k USD</option>
                <option value="$30k+">Más de $30k USD</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Detalles del Proyecto / Mensaje
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Describe los objetivos principales, requerimientos de integración y fechas esperadas..."
              className="w-full px-4 py-3 rounded-xl bg-petroleum-950 border border-brand-500/30 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-xs"
              required
            />
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-xs text-red-300 space-y-2">
              <p>{errorMessage}</p>
              <button
                type="button"
                onClick={triggerDirectMailto}
                className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Enviar correo usando mi cliente habitual
              </button>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-brand-500/20">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_OWNER.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-petroleum-950 border border-brand-500/20 text-slate-400 hover:text-emerald-300 transition-colors"
                title="Ver perfil de LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <Button
              variant="primary"
              type="submit"
              isLoading={isSubmitting}
              disabled={!isFormValid}
              className="shadow-glow"
            >
              <Send className="w-4 h-4 mr-1" />
              <span>Enviar Correo a efraingon@gmail.com</span>
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
