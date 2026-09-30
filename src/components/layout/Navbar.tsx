"use client";

import React, { useState, useEffect } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Button } from "@/components/ui/Button";
import { Sun, Moon, Sparkles, Layers, Cpu, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode, openEstimator, openContact } = usePortfolioStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-petroleum-950/90 backdrop-blur-xl border-b border-brand-500/30 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Corporate Emblem & Prominent Brand Name ("Efraín González" más grande) */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 text-white font-display tracking-tight"
        >
          {/* Corporate SVG Emblem / Logo Icon */}
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-500 to-petroleum-400 p-0.5 shadow-glow group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div className="w-full h-full bg-petroleum-950 rounded-[14px] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-emerald-400 group-hover:text-brand-300 transition-colors"
              >
                <path
                  d="M12 2L3 7V12C3 17.52 6.84 22.09 12 23C17.16 22.09 21 17.52 21 12V7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold font-display leading-none group-hover:text-brand-300 transition-colors tracking-tight text-white">
              Efraín González
            </span>
            <span className="text-[11px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mt-1">
              Enterprise Software Architect
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#clients"
            className="hover:text-brand-300 transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Clientes
          </a>
          <a
            href="#projects"
            className="hover:text-brand-300 transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            Proyectos
          </a>
          <a
            href="#services"
            className="hover:text-brand-300 transition-colors flex items-center gap-1.5"
          >
            <Cpu className="w-4 h-4 text-petroleum-400" />
            Servicios
          </a>
          <button
            onClick={openContact}
            className="hover:text-brand-300 transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            Contacto
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar tema claro u oscuro"
            className="p-2.5 rounded-xl bg-petroleum-900/60 border border-brand-500/30 text-slate-300 hover:text-white hover:border-brand-400 transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-400" />}
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={openEstimator}
            className="shadow-glow"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span className="hidden sm:inline">Estimar Proyecto</span>
            <span className="sm:hidden">Cotizar</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
