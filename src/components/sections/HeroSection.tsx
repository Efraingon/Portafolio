"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PORTFOLIO_OWNER } from "@/lib/constants";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Terminal, Award, BookOpen } from "lucide-react";

export function HeroSection() {
  const { openEstimator, openContact } = usePortfolioStore();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Dynamic Ambient Blur Glows (Verde Esmeralda & Azul Petróleo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-brand-600/35 via-petroleum-500/25 to-emerald-400/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" className="py-1 px-3">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-300" />
                Disponible para Proyectos & Consultoría Enterprise
              </Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Ingeniería de Software & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-300 via-brand-400 to-petroleum-300 bg-clip-text text-transparent">
                Integraciones .NET & SQL Server
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {PORTFOLIO_OWNER.bio}
            </p>

            {/* Zero-Friction 2-Click UX Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={openEstimator}
                className="w-full sm:w-auto shadow-glow"
              >
                <Sparkles className="w-5 h-5 text-emerald-200" />
                <span>Calculadora de Proyecto (1-Clic)</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>

              <Button
                variant="glass"
                size="lg"
                onClick={openContact}
                className="w-full sm:w-auto"
              >
                <span>Contacto Directo</span>
              </Button>
            </div>

            {/* Certifications & Badges */}
            <div className="pt-6 border-t border-brand-500/20 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
                <Award className="w-4 h-4 text-amber-400" />
                Microsoft Certified Professional (.NET Framework & ADO.NET)
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-petroleum-300">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                Maestría en Computación Emergente (UCV)
              </span>
            </div>
          </div>

          {/* Dynamic Neomorphic / Glass Profile & Code Card (5 Cols) */}
          <div className="lg:col-span-5">
            <Card variant="neomorphic" className="p-6 border-brand-500/40 relative group">
              <div className="flex items-center justify-between border-b border-brand-900/60 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-petroleum-400" /> efrain_gonzalez.config.ts
                </span>
              </div>

              <pre className="font-mono text-xs text-emerald-200/90 leading-relaxed overflow-x-auto p-2">
                <code>{`// Executive Profile Blueprint
export const efrainProfile = {
  name: "${PORTFOLIO_OWNER.name}",
  role: "${PORTFOLIO_OWNER.title}",
  theme: "Verde Esmeralda & Azul Petróleo",
  coreSkills: [
    "C#", ".NET Core", "ASP.NET MVC",
    "SQL Server T-SQL", "REST APIs",
    "DevExpress", "Power BI", "Azure"
  ],
  experience: "15+ Años Enterprise",
  keyProjects: [
    "VUCE Costa Rica",
    "SISTRAN Core Seguros (AIG, AXA)",
    "Integración Bancaria & Conciliación",
    "Sincronización Inventarios Real-Time"
  ]
};`}</code>
              </pre>

              {/* Stats overlay grid */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-brand-900/60">
                {PORTFOLIO_OWNER.stats.map((stat, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-petroleum-950/80 border border-brand-500/20">
                    <div className="text-base font-bold font-display text-emerald-400">{stat.value}</div>
                    <div className="text-[11px] text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
