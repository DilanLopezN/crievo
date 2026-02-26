"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import FadeUp from "./FadeUp";
import Link from "next/link";

const GalaxyModel = dynamic(() => import("./GalaxyModel"), { ssr: false });

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 80; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      const s = `${Math.random() * 2 + 1}px`;
      star.style.width = s;
      star.style.height = s;
      container.appendChild(star);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-15 pt-16 md:pt-28 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.25), transparent 70%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(76,29,149,0.2), transparent 60%)
          `,
        }}
      />
      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 z-0 overflow-hidden" />

      {/* 3D Galaxy - smaller on mobile to not block content */}
      <div className="absolute inset-x-0 top-0 h-[50vh] md:h-full md:inset-0 z-[1] pointer-events-none">
        <GalaxyModel />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
        <FadeUp className="max-w-[650px] flex-shrink-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-5 uppercase">
            Da Criação à{" "}
            <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
              Evolução Digital.
            </span>
          </h1>
          <p className="text-gray-light text-base leading-relaxed mb-8 max-w-[500px]">
            A Crievo é uma agência de desenvolvimento digital especializada em criar experiências
            únicas. Com foco em performance e resultados, transformamos ideias em projetos de impacto.
          </p>
          <Link
            href="#contato"
            className="inline-block px-9 py-3.5 bg-purple-primary text-white rounded-lg font-semibold text-[0.95rem] no-underline transition-all duration-300 hover:bg-purple-glow hover:-translate-y-0.5 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
          >
            Falar com especialista
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
