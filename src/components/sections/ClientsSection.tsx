"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Building2, CheckCircle2 } from "lucide-react";

const EXPERIENCE_AREAS = [
  { name: "Seguros", description: "Core de seguros y evolución de servicios企業の." },
  { name: "Comercio exterior", description: "Sistemas transaccionales e integraciones REST u oData." },
  { name: "Sistemas administrativos", description: "Módulos tributarios, facturación y operación de procesos." },
  { name: "Conciliación bancaria", description: "Movimientos financieros, validación y trazabilidad." },
  { name: "Inventario", description: "Sincronización de existencias, almacenes y notas de entrega." },
  { name: "Business Intelligence", description: "ETL, reportes y tableros de apoyo a decisiones." },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-petroleum-950/60 border-y border-brand-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" duration={450}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="emerald" className="py-1 px-3">
              <Building2 className="w-3.5 h-3.5 mr-1 text-brand-400" />
              Áreas de experiencia
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Experiencia en sistemas empresariales
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Desarrollo backend, integración de servicios, modelado de datos y evolución de aplicaciones administrativas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERIENCE_AREAS.map((area, index) => (
            <ScrollReveal key={area.name} direction="up" delay={(index % 3) * 80} duration={350}>
              <Card variant="neomorphic" className="p-5 h-full group hover:border-emerald-500/50 transition-all duration-200 border-brand-500/20">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-9 h-9 rounded-xl bg-petroleum-950 border border-brand-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">{area.name}</h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
