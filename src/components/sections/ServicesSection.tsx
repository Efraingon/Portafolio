"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Database, FileCode, BarChart3, Lock } from "lucide-react";

export function ServicesSection() {
  const SERVICES = [
    {
      icon: <FileCode className="w-6 h-6 text-brand-400" />,
      title: "Desarrollo Backend & Integraciones .NET / C#",
      description: "Construcción de arquitecturas robustas con C#, ASP.NET Core, ASP.NET MVC y RESTful Web APIs con manejo seguro de transacciones y autenticación JWT/OAuth.",
      tags: ["C#", ".NET Core", "ASP.NET MVC", "Web API", "Azure"],
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Optimización SQL Server & Tuning de Performance",
      description: "Diseño de procedimientos almacenados (Stored Procedures), Triggers, consultas complejas y optimización de bases de datos de alta demanda transaccional.",
      tags: ["SQL Server", "T-SQL", "Stored Procedures", "Triggers", "Query Tuning"],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Dashboards Power BI & Business Intelligence",
      description: "Modelado de datos en Power Query, dashboards financieros en tiempo real y sistemas de reportes RDLC integrados para la toma de decisiones gerenciales.",
      tags: ["Power BI", "Power Query", "RDLC Reports", "ETL C#", "Análisis Financiero"],
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: "Integraciones Bancarias, Firma Electrónica & ERP",
      description: "Sincronización automatizada de inventarios, conciliación de movimientos bancarios, firma digital con proveedores externos y módulos administrativos DevExpress.",
      tags: ["Firma Digital", "Conciliación Bancaria", "DevExpress", "Sincronización ERP"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con animación sutil al hacer scroll */}
        <ScrollReveal direction="up" duration={450}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="emerald" className="py-1 px-3">
              Servicios Especializados de Ingeniería
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Soluciones Enterprise en .NET, SQL Server e Integraciones
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Especializado en la resolución de problemas técnicos complejos en sistemas financieros, seguros, comercio exterior e inventarios.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de servicios con entrada escalonada (Staggered Scroll Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 120} // Retardo sutil escalonado (120ms por tarjeta)
              duration={400}
            >
              <Card
                variant="glass"
                className="p-8 group hover:border-brand-500/50 transition-all duration-300 h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-petroleum-950/80 border border-brand-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-petroleum-950 border border-brand-500/20 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
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
