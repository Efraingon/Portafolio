"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // en milisegundos
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // en ms
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 400,
  once = true,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [once]);

  // Initial transform state before reveal
  const getDirectionStyles = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100";

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-8 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-8 scale-[0.98]";
      case "left":
        return "opacity-0 translate-x-8";
      case "right":
        return "opacity-0 -translate-x-8";
      case "none":
        return "opacity-0 scale-[0.97]";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all ease-out will-change-[transform,opacity]",
        getDirectionStyles(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
