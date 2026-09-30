import React from "react";
import { getProjects } from "@/services/projectsService";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, CheckCircle2, Server } from "lucide-react";
import Image from "next/image";

/**
 * Server Component (RSC) example fetching initial projects data on the server
 * with ZERO client-side JavaScript overhead for rendering.
 */
export async function ProjectsServerList() {
  // Direct async data fetching inside Server Component
  const initialProjects = await getProjects("All");

  return (
    <div className="space-y-6">
      {/* Server Badge Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-full">
          <Server className="w-3.5 h-3.5" />
          <span>React Server Component (RSC) - Renderizado en Servidor con 0 KB Client JS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initialProjects.map((project) => (
          <Card
            key={project.id}
            variant="glass"
            className="group flex flex-col justify-between border-slate-800 hover:border-brand-500/40"
          >
            <div className="space-y-4">
              {/* Project Image Header */}
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <Badge variant="cyan">{project.category}</Badge>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{project.clientName} • {project.subtitle}</p>
              </div>

              <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Desafíos de Arquitectura Resueltos:</p>
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

            {/* Metrics & Tags */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-right">
                <span className="text-sm font-bold font-mono text-emerald-400">
                  {project.metrics[0]?.value}
                </span>
                <span className="block text-[10px] text-slate-500">
                  {project.metrics[0]?.label}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
