"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "neomorphic" | "flat" | "glowing";
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  variant = "glass",
  hoverEffect = true,
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-2xl p-6 transition-all duration-300 relative overflow-hidden";

  const variants = {
    glass:
      "backdrop-blur-xl bg-petroleum-950/70 dark:bg-petroleum-950/70 border border-brand-500/20 shadow-glass-sm text-slate-100",
    neomorphic:
      "bg-[#040c0a] border border-petroleum-900 shadow-neomorphic text-slate-100",
    flat:
      "bg-petroleum-900/80 border border-brand-500/20 text-slate-100",
    glowing:
      "backdrop-blur-xl bg-petroleum-950/90 border border-brand-500/40 shadow-glow text-white",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-2xl hover:border-brand-400/50"
    : "";

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
