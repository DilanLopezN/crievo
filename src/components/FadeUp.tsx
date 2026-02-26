"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale-in";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  variant?: AnimationVariant;
  delay?: string;
}

export default function FadeUp({ children, className = "", as: Tag = "div", variant = "fade-up", delay }: FadeUpProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`${variant} ${delay ?? ""} ${className}`}>
      {children}
    </Tag>
  );
}
