"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useProjectEstimator } from "@/hooks/useProjectEstimator";
import { ESTIMATOR_SCOPES, ESTIMATOR_FEATURES } from "@/lib/constants";
import { ProjectScopeType, ProjectTimeline } from "@/types/estimator";
import { Sparkles, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function ProjectEstimatorModal() {
  const { isEstimatorOpen, closeEstimator } = usePortfolioStore();

  const {
    step,
    selectedScope,
    selectedFeatures,
    selectedTimeline,
    contactInfo,
    calculatedEstimate,
    canProceedStep1,
    canProceedStep2,
    canSubmit,
    nextStep,
    prevStep,
    selectScope,
    toggleFeature,
    setTimeline,
    updateContactInfo,
    handleFinalSubmit,
  } = useProjectEstimator();

  const TIMELINES: ProjectTimeline[] = [
    "Express (2-4 weeks)",
    "Standard (1-2 months)",
    "Scale (3+ months)",
  ];

  return (
    <Modal
      isOpen={isEstimatorOpen}
      onClose={closeEstimator}
      title="Calculadora & Estimador de Proyecto"
      maxWidth="2xl"
    >
      <div className="space-y-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-brand-500/20 pb-4">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                  step === i
                    ? "bg-brand-500 text-white ring-2 ring-emerald-400/50 shadow-glow"
                    : step > i
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-petroleum-900 text-slate-500"
                }`}
              >
                {step > i ? <Check className="w-4 h-4" /> : i}
              </div>
            ))}
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block font-mono">Estimación Calculada:</span>
            <span className="text-lg font-bold font-mono text-emerald-400">
              ~{formatCurrency(calculatedEstimate.finalTotal)} USD
            </span>
          </div>
        </div>

        {/* STEP 1: Select Scope */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">1. Selecciona el Tipo de Alcance</h3>
              <p className="text-xs text-slate-400">Elige la solución que mejor se adapte a tu meta de negocio.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ESTIMATOR_SCOPES.map((scope) => {
                const isSelected = selectedScope === scope.id;
                return (
                  <div
                    key={scope.id}
                    onClick={() => selectScope(scope.id as ProjectScopeType)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-950/60 border-brand-500 text-white shadow-glow"
                        : "bg-petroleum-950/60 border-brand-500/20 text-slate-300 hover:border-brand-500/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">{scope.title}</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        Desde {formatCurrency(scope.basePriceUSD)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{scope.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-4">
              <Button variant="primary" disabled={!canProceedStep1} onClick={nextStep}>
                <span>Siguiente: Funcionalidades</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Features */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">2. Módulos & Tecnologías Requeridas</h3>
              <p className="text-xs text-slate-400">Selecciona los módulos a integrar en la solución.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
              {ESTIMATOR_FEATURES.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                      isSelected
                        ? "bg-brand-950/60 border-brand-500 text-white"
                        : "bg-petroleum-950/40 border-brand-500/20 text-slate-400 hover:border-brand-500/40"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? "bg-brand-500 border-brand-400 text-white"
                          : "border-slate-700"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{feat.title}</span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          +{formatCurrency(feat.priceUSD)}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Tiempo de Entrega Deseado:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {TIMELINES.map((tl) => (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => setTimeline(tl)}
                    className={`px-2 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                      selectedTimeline === tl
                        ? "bg-brand-600/30 border-brand-500 text-emerald-300"
                        : "bg-petroleum-950 border-brand-500/20 text-slate-400"
                    }`}
                  >
                    {tl.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button variant="ghost" onClick={prevStep}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                Atrás
              </Button>
              <Button variant="primary" disabled={!canProceedStep2} onClick={nextStep}>
                <span>Siguiente: Enviar Estimación</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Submit */}
        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4 animate-fade-in">
            <div className="p-4 rounded-2xl bg-brand-950/40 border border-brand-500/30 text-xs space-y-1">
              <span className="font-mono text-emerald-400 font-bold uppercase">Resumen de Propuesta:</span>
              <p className="text-slate-300">
                Alcance: <strong>{calculatedEstimate.scopeTitle}</strong> • {selectedFeatures.length} Módulos • Tiempo: {selectedTimeline}
              </p>
              <p className="text-lg font-bold font-mono text-white pt-1">
                Presupuesto Estimado: ~{formatCurrency(calculatedEstimate.finalTotal)} USD
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Nombre Completo"
                placeholder="Ej. Carlos Mendoza"
                value={contactInfo.fullName}
                onChange={(e) => updateContactInfo("fullName", e.target.value)}
                required
              />
              <Input
                label="Correo Electrónico Empresarial"
                type="email"
                placeholder="ejemplo@empresa.com"
                value={contactInfo.email}
                onChange={(e) => updateContactInfo("email", e.target.value)}
                required
              />
            </div>

            <Input
              label="Empresa / Organización (Opcional)"
              placeholder="Nombre de tu organización"
              value={contactInfo.company}
              onChange={(e) => updateContactInfo("company", e.target.value)}
            />

            <div className="flex items-center justify-between pt-4">
              <Button variant="ghost" type="button" onClick={prevStep}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                Atrás
              </Button>
              <Button variant="primary" type="submit" disabled={!canSubmit} className="shadow-glow">
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Solicitar Propuesta Oficial</span>
              </Button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}
