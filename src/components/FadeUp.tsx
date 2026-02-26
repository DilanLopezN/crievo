"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export default function FadeUp({ children, className = "", as: Tag = "div" }: FadeUpProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`fade-up ${className}`}>
      {children}
    </Tag>
  );
}
