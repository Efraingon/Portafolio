"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-brand-600 via-brand-500 to-petroleum-600 hover:from-brand-500 hover:to-petroleum-500 text-white shadow-lg shadow-brand-500/25 border border-brand-400/30 hover:shadow-brand-500/40",
      secondary:
        "bg-petroleum-900 text-emerald-100 hover:bg-petroleum-800 border border-brand-500/30 shadow-md",
      glass:
        "backdrop-blur-xl bg-emerald-950/40 text-emerald-100 border border-emerald-500/20 hover:bg-emerald-900/60 shadow-glass-sm hover:shadow-glow",
      outline:
        "border-2 border-brand-500/50 text-brand-300 hover:bg-brand-500/10",
      ghost:
        "text-slate-300 hover:bg-petroleum-900/60 hover:text-emerald-300",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-1 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Cargando...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
