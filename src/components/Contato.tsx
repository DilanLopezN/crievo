"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const projectTypes = ["Landing Page", "Site Institucional", "Sistema SaaS", "Aplicativo", "Outro"];

export default function Contato() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <section id="contato" className="py-24 px-6 md:px-15 bg-bg-card">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Contato</h2>
      </FadeUp>
      <FadeUp>
        <p className="text-center text-gray-mid text-sm mb-15">Vamos tirar sua ideia do papel</p>
      </FadeUp>

      <FadeUp variant="scale-in" className="max-w-[700px] mx-auto">
        {/* Nome / Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-light mb-1.5">Nome*</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-light mb-1.5">Email*</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors"
            />
          </div>
        </div>

        {/* Empresa */}
        <div className="mb-4">
          <label className="block text-sm text-gray-light mb-1.5">Empresa (Opcional)</label>
          <input
            type="text"
            placeholder="Nome da empresa"
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors"
          />
        </div>

        {/* Tipo de Projeto */}
        <p className="text-sm text-gray-light mb-3">Tipo De Projeto (Selecione):</p>
        <div className="flex flex-wrap gap-2.5 mb-4">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 border ${
                selectedType === type
                  ? "bg-purple-primary border-purple-primary text-white"
                  : "bg-white/5 border-purple-primary/15 text-gray-light hover:border-purple-primary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Mensagem */}
        <div className="mb-4">
          <label className="block text-sm text-gray-light mb-1.5">Mensagem</label>
          <textarea
            placeholder="Conte-nos sobre seu projeto..."
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors resize-y"
          />
        </div>

        {/* Submit */}
        <button className="w-full py-3.5 bg-purple-primary text-white rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 hover:bg-purple-glow hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] mt-2">
          Enviar
        </button>
      </FadeUp>
    </section>
  );
}
