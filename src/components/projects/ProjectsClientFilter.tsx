"use client";

import React from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useProjectsQuery } from "@/hooks/useProjectsQuery";
import { ProjectCategory } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, RefreshCw, ExternalLink } from "lucide-react";
import Image from "next/image";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Cloud Architecture",
  "Full-Stack SaaS",
  "AI & Automation",
  "Enterprise Web",
];

export function ProjectsClientFilter() {
  const { activeCategory, setActiveCategory } = usePortfolioStore();

  const { projects, isLoading, isError, refetch } = useProjectsQuery(activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills Header */}
      <ScrollReveal direction="up" duration={350}>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pb-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isActive
                    ? "bg-gradient-to-r from-brand-600 to-petroleum-600 text-white shadow-lg shadow-brand-500/25 border border-brand-400/40"
                    : "bg-petroleum-950/80 border border-brand-500/20 text-slate-400 hover:text-white hover:bg-petroleum-900"
                }`}
              >
                {cat === "All" ? "Todos los Proyectos" : cat}
              </button>
            );
          })}

          <button
            onClick={() => refetch()}
            title="Revalidar con TanStack Query"
            className="p-2 rounded-xl bg-petroleum-950 border border-brand-500/20 text-slate-400 hover:text-brand-300 transition-colors ml-auto"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-brand-400" : ""}`} />
          </button>
        </div>
      </ScrollReveal>

      {/* Dynamic Projects Grid con Scroll-driven animation */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
          {[1, 2].map((i) => (
            <div key={i} className="h-96 rounded-2xl bg-petroleum-950/60 border border-brand-500/20" />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-12 text-red-400">
          Error al cargar los proyectos con TanStack Query.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={(index % 2) * 100}
              duration={400}
            >
              <Card
                variant="glass"
                className="group flex flex-col justify-between border-brand-500/20 hover:border-brand-400/50 h-full"
              >
                <div className="space-y-4">
                  <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-petroleum-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950 via-petroleum-950/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <Badge variant="emerald">{project.category}</Badge>
                    </div>

                    {project.liveUrl && (
                      <div className="absolute top-3 right-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 backdrop-blur-md transition-all hover:scale-105"
                          title="Abrir aplicación en vivo"
                        >
                          <span>Demo en Vivo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-emerald-400/80 font-mono mt-0.5">{project.clientName} • {project.subtitle}</p>
                  </div>

                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-500/20">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Hitos de Ingeniería:</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-500/20 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-petroleum-950 border border-brand-500/20 text-emerald-300/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-bold font-mono text-emerald-400">
                        {project.metrics[0]?.value}
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        {project.metrics[0]?.label}
                      </span>
                    </div>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 transition-all group/btn"
                    >
                      <span>Probar Aplicación en Vercel</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
