"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import FadeUp from "./FadeUp";

const services = [
  { num: "01", title: "Landing Page", desc: "Páginas de alta conversão focadas em resultados e performance." },
  { num: "02", title: "Sites Institucionais", desc: "Websites profissionais que transmitem credibilidade e confiança." },
  { num: "03", title: "Aplicativos", desc: "Apps nativos e multiplataforma com foco na experiência do usuário." },
  { num: "04", title: "Sistemas SaaS", desc: "Plataformas escaláveis e robustas para o seu negócio digital." },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const touchStartX = useRef(0);

  const updateMaxIndex = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const container = track.parentElement;
    if (!container) return;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const gap = 24;
    const cardWidth = card.offsetWidth + gap;
    const visibleCards = Math.floor((container.offsetWidth + gap) / cardWidth);
    setMaxIndex(Math.max(0, services.length - visibleCards));
  }, []);

  useEffect(() => {
    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, [updateMaxIndex]);

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement;
    if (!card) return;
    const gap = 24;
    const cardWidth = card.offsetWidth + gap;
    trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index]);

  function slide(dir: number) {
    setIndex((prev) => Math.max(0, Math.min(maxIndex, prev + dir)));
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      slide(diff > 0 ? 1 : -1);
    }
  }

  return (
    <section id="servicos" className="py-24 px-6 md:px-15 bg-bg-card">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">O Que Fazemos</h2>
      </FadeUp>
      <FadeUp>
        <p className="text-center text-gray-mid text-sm mb-15">Desenvolvimento Digital Completo</p>
      </FadeUp>

      <FadeUp className="max-w-[1100px] mx-auto overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex gap-6 transition-transform duration-500 ease-out"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-white/[0.03] border border-purple-primary/10 rounded-2xl py-9 px-7 text-center transition-all duration-400 hover:border-purple-primary/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden min-w-[240px] sm:min-w-[260px] md:min-w-[240px] shrink-0 flex-1"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="text-4xl font-extrabold text-purple-primary/20 mb-3">{s.num}</div>
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-mid text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Carousel dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(Math.min(i, maxIndex))}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-purple-primary w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => slide(-1)}
            disabled={index === 0}
            className="w-11 h-11 rounded-full border border-purple-primary/30 bg-transparent text-white text-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-purple-primary hover:border-purple-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-purple-primary/30"
          >
            ←
          </button>
          <button
            onClick={() => slide(1)}
            disabled={index >= maxIndex}
            className="w-11 h-11 rounded-full border border-purple-primary/30 bg-transparent text-white text-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-purple-primary hover:border-purple-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-purple-primary/30"
          >
            →
          </button>
        </div>
      </FadeUp>
    </section>
  );
}
