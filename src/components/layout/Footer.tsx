import React from "react";
import { PORTFOLIO_OWNER } from "@/lib/constants";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-brand-500/20 bg-petroleum-950/80 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info with corporate logo emblem & larger text */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-500 to-petroleum-400 p-0.5 shadow-glow shrink-0">
            <div className="w-full h-full bg-petroleum-950 rounded-[10px] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-emerald-400"
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
          <div>
            <p className="text-lg font-extrabold text-white font-display leading-tight">{PORTFOLIO_OWNER.name}</p>
            <p className="text-xs text-emerald-400 font-mono">{PORTFOLIO_OWNER.title}</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} {PORTFOLIO_OWNER.name}. Todos los derechos reservados. Contacto directo:{" "}
          <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-emerald-300 hover:underline font-mono">
            {PORTFOLIO_OWNER.email}
          </a>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_OWNER.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-petroleum-900 border border-brand-500/20 text-slate-300 hover:text-brand-300 hover:border-brand-400/50 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_OWNER.email}`}
            className="p-2.5 rounded-xl bg-petroleum-900 border border-brand-500/20 text-slate-300 hover:text-brand-300 hover:border-brand-400/50 transition-all"
            aria-label="Enviar Email a efraingon@gmail.com"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
