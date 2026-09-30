"use client";

import React, { useState } from "react";
import { CLIENTS_LIST } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Building2, ShieldCheck, CheckCircle2, Search, Briefcase } from "lucide-react";

export function ClientsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = CLIENTS_LIST.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-petroleum-950/60 border-y border-brand-500/20">
      {/* Dynamic ambient backdrop light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-600/10 via-emerald-500/10 to-petroleum-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <ScrollReveal direction="up" duration={450}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="emerald" className="py-1 px-3">
              <Building2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Casos de Éxito & Cartera de Clientes
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Empresas y Organizaciones con Soluciones Desarrolladas
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Empresas del sector salud, manufactura, alimentos, comercio exterior, agroindustria y distribución que han confiado en el desarrollo e integración de sus sistemas y aplicaciones críticas.
            </p>

            {/* Quick Metrics Bar */}
            <div className="inline-flex items-center gap-6 pt-3 px-5 py-2.5 rounded-2xl bg-petroleum-900/80 border border-brand-500/30 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {CLIENTS_LIST.length} Clientes Corporativos
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Multi-Industria & ERP
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Search / Filter bar for smooth browsing */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filtrar por nombre o sector comercial..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-petroleum-900/90 border border-brand-500/30 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredClients.map((client, idx) => (
            <ScrollReveal
              key={client.name}
              direction="up"
              delay={(idx % 4) * 80}
              duration={350}
            >
              <Card
                variant="neomorphic"
                className="p-5 h-full flex flex-col justify-between group hover:border-emerald-500/50 hover:bg-petroleum-900/80 transition-all duration-200 border-brand-500/20"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-9 h-9 rounded-xl bg-petroleum-950 border border-brand-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/50 transition-all shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {client.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                      {client.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {client.sector}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-brand-900/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1 text-emerald-400/90">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    App Implementada
                  </span>
                  <span>Producción</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No se encontraron clientes que coincidan con &quot;{searchTerm}&quot;.
          </div>
        )}
      </div>
    </section>
  );
}
