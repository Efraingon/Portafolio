import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ProjectsClientFilter } from "@/components/projects/ProjectsClientFilter";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PORTFOLIO_OWNER } from "@/lib/constants";
import { Award, GraduationCap, CheckCircle } from "lucide-react";

export default async function HomePage() {
  const TECH_STACK = [
    { category: "Lenguajes & Frameworks", items: ["C#", ".NET Core", "ASP.NET MVC", "ASP.NET Web API", "JavaScript", "TypeScript"] },
    { category: "Base de Datos & Performance", items: ["Microsoft SQL Server", "T-SQL Stored Procedures", "Triggers", "Query Optimization", "ADO.NET / Entity Framework"] },
    { category: "Integraciones & Web", items: ["APIs RESTful", "oData", "JSON / XML", "DevExpress / DevExtreme", "Firma Electrónica Digital"] },
    { category: "Analytics & Cloud", items: ["Power BI", "Power Query", "RDLC Reports", "Azure Cloud Services", "Git / DevOps"] },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section con Scroll Reveal */}
      <ServicesSection />

      {/* Clients Section (Cartera de clientes empresariales) */}
      <ClientsSection />

      {/* Projects Showcase Section (Real Projects: VUCE, SISTRAN, Banking, Inventory, Power BI) */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal direction="up" duration={400}>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge variant="cyan" className="py-1 px-3">
                Proyectos Destacados & Trayectoria
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                Experiencia en Proyectos Enterprise & Gobierno
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Casos reales de soluciones implementadas para comercio exterior (VUCE), multinacionales aseguradoras (SISTRAN), conciliación bancaria y business intelligence.
              </p>
            </div>
          </ScrollReveal>

          {/* Client Filter Component connecting Zustand & TanStack Query */}
          <ProjectsClientFilter />
        </div>
      </section>

      {/* Education & Certifications Section con Scroll Reveal */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Certifications Card */}
            <ScrollReveal direction="up" delay={0} duration={400}>
              <Card variant="glass" className="p-8 space-y-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Certificaciones Oficiales</h3>
                    <p className="text-xs text-slate-400">Microsoft & Seguridad de la Información</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  {PORTFOLIO_OWNER.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>

            {/* Education Card */}
            <ScrollReveal direction="up" delay={150} duration={400}>
              <Card variant="glass" className="p-8 space-y-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-petroleum-400/20 text-emerald-300 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Formación Académica</h3>
                    <p className="text-xs text-slate-400">Títulos Universitarios & Posgrado</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  {PORTFOLIO_OWNER.education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-brand-500/40 pl-3 space-y-0.5">
                      <h4 className="font-bold text-white">{edu.institution}</h4>
                      <p className="text-slate-300">{edu.degree}</p>
                      <p className="text-[11px] font-mono text-slate-500">{edu.years}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Tech Stack Section con Scroll Reveal */}
      <section className="py-20 bg-petroleum-950/40 border-y border-brand-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal direction="up" duration={400}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="violet" className="py-1 px-3">
                Skills & Stack Tecnológico
              </Badge>
              <h2 className="text-3xl font-bold font-display text-white">
                Herramientas y Competencias Clave
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((group, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100} duration={350}>
                <Card variant="neomorphic" className="p-6 space-y-4 border-brand-500/20 h-full">
                  <h3 className="text-sm font-bold font-mono uppercase text-emerald-400 border-b border-brand-900/60 pb-2">
                    {group.category}
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 font-medium">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
