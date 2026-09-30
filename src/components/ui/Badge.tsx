import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "emerald" | "violet" | "cyan" | "outline";
}

export function Badge({
  children,
  className,
  variant = "emerald",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors";

  const variants = {
    brand:
      "bg-brand-500/15 text-brand-300 border border-brand-500/30",
    emerald:
      "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40",
    violet:
      "bg-teal-500/15 text-teal-300 border border-teal-500/30",
    cyan:
      "bg-petroleum-400/20 text-petroleum-200 border border-petroleum-400/40",
    outline:
      "border border-emerald-500/30 text-emerald-300",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
