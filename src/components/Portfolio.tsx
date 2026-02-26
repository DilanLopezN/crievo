"use client";

import { useState, useRef } from "react";
import FadeUp from "./FadeUp";

const projects = [
  { name: "Líber Industrial", gradient: "from-[#1a1a2e] to-[#16213e]" },
  { name: "Love Cupone", gradient: "from-[#0f0f1a] to-[#1a0a2e]" },
  { name: "Wiredesk", gradient: "from-[#1a1a2e] to-[#2a1a3e]" },
];

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function slide(dir: number) {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement;
    const cardWidth = card.offsetWidth + 24;
    const maxIndex = projects.length - Math.floor(trackRef.current.parentElement!.offsetWidth / cardWidth);
    const next = Math.max(0, Math.min(maxIndex, index + dir));
    setIndex(next);
    trackRef.current.style.transform = `translateX(-${next * cardWidth}px)`;
  }

  return (
    <section id="portfolio" className="py-24 px-6 md:px-15">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Nosso Portfólio</h2>
      </FadeUp>
      <FadeUp>
        <p className="text-center text-gray-mid text-sm mb-15">Alguns dos nossos projetos</p>
      </FadeUp>

      <FadeUp className="max-w-[1100px] mx-auto overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex gap-6 transition-transform duration-500 ease-out"
        >
          {projects.map((p) => (
            <div
              key={p.name}
              className="relative min-w-[280px] md:min-w-[340px] h-[220px] rounded-2xl overflow-hidden border border-purple-primary/10 shrink-0"
            >
              <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center text-gray-mid`}>
                {p.name}
              </div>
              <span className="absolute bottom-4 left-4 text-sm font-semibold bg-black/60 px-3.5 py-1.5 rounded-lg backdrop-blur-sm">
                {p.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => slide(-1)}
            className="w-11 h-11 rounded-full border border-purple-primary/30 bg-transparent text-white text-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-purple-primary hover:border-purple-primary"
          >
            ←
          </button>
          <button
            onClick={() => slide(1)}
            className="w-11 h-11 rounded-full border border-purple-primary/30 bg-transparent text-white text-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-purple-primary hover:border-purple-primary"
          >
            →
          </button>
        </div>
      </FadeUp>
    </section>
  );
}
