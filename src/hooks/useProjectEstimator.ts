"use client";

import { useMemo } from "react";
import { useEstimatorStore } from "@/store/useEstimatorStore";
import { ESTIMATOR_SCOPES, ESTIMATOR_FEATURES } from "@/lib/constants";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function useProjectEstimator() {
  const {
    step,
    selectedScope,
    selectedFeatures,
    selectedTimeline,
    contactInfo,
    setStep,
    nextStep,
    prevStep,
    selectScope,
    toggleFeature,
    setTimeline,
    updateContactInfo,
    resetEstimator,
  } = useEstimatorStore();

  const closeEstimatorModal = usePortfolioStore((state) => state.closeEstimator);

  // Business Logic: Calculate Total Price dynamically
  const calculatedEstimate = useMemo(() => {
    const scopeObj = ESTIMATOR_SCOPES.find((s) => s.id === selectedScope);
    const basePrice = scopeObj ? scopeObj.basePriceUSD : 0;

    const featuresPrice = selectedFeatures.reduce((total, featId) => {
      const feat = ESTIMATOR_FEATURES.find((f) => f.id === featId);
      return total + (feat ? feat.priceUSD : 0);
    }, 0);

    let multiplier = 1;
    if (selectedTimeline.includes("Express")) {
      multiplier = 1.25; // 25% rush delivery multiplier
    } else if (selectedTimeline.includes("Scale")) {
      multiplier = 1.1;
    }

    const subtotal = basePrice + featuresPrice;
    const finalTotal = Math.round(subtotal * multiplier);

    return {
      basePrice,
      featuresPrice,
      subtotal,
      finalTotal,
      scopeTitle: scopeObj?.title || "Personalizado",
    };
  }, [selectedScope, selectedFeatures, selectedTimeline]);

  // Validation Logic
  const canProceedStep1 = Boolean(selectedScope);
  const canProceedStep2 = selectedFeatures.length > 0;
  const canSubmit =
    contactInfo.fullName.trim().length > 2 &&
    contactInfo.email.includes("@") &&
    contactInfo.email.includes(".");

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Simulate API submission
    console.log("Submitting Project Estimate:", {
      scope: selectedScope,
      features: selectedFeatures,
      timeline: selectedTimeline,
      estimate: calculatedEstimate.finalTotal,
      contact: contactInfo,
    });

    // Reset and close modal smoothly
    setTimeout(() => {
      alert(`¡Gracias ${contactInfo.fullName}! Hemos recibido la estimación de tu proyecto por ~$${calculatedEstimate.finalTotal.toLocaleString()} USD. Efraín se pondrá en contacto en menos de 24 horas.`);
      resetEstimator();
      closeEstimatorModal();
    }, 300);
  };

  return {
    step,
    selectedScope,
    selectedFeatures,
    selectedTimeline,
    contactInfo,
    calculatedEstimate,
    canProceedStep1,
    canProceedStep2,
    canSubmit,
    setStep,
    nextStep,
    prevStep,
    selectScope,
    toggleFeature,
    setTimeline,
    updateContactInfo,
    resetEstimator,
    handleFinalSubmit,
  };
}
