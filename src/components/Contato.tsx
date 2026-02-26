"use client";

import { useState, type FormEvent } from "react";
import FadeUp from "./FadeUp";

const projectTypes = ["Landing Page", "Site Institucional", "Sistema SaaS", "Aplicativo", "Outro"];

export default function Contato() {
  const [selectedType, setSelectedType] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          empresa,
          tipoProjeto: selectedType,
          mensagem,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setNome("");
      setEmail("");
      setEmpresa("");
      setSelectedType("");
      setMensagem("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar mensagem.");
    }
  }

  return (
    <section id="contato" className="py-24 px-6 md:px-15 bg-bg-card">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Contato</h2>
      </FadeUp>
      <FadeUp>
        <p className="text-center text-gray-mid text-sm mb-15">Vamos tirar sua ideia do papel</p>
      </FadeUp>

      <FadeUp variant="scale-in" className="max-w-[700px] mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Nome / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-light mb-1.5">Nome*</label>
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-light mb-1.5">Email*</label>
              <input
                type="email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors"
            />
          </div>

          {/* Tipo de Projeto */}
          <p className="text-sm text-gray-light mb-3">Tipo De Projeto (Selecione):</p>
          <div className="flex flex-wrap gap-2.5 mb-4">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
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
            <label className="block text-sm text-gray-light mb-1.5">Mensagem*</label>
            <textarea
              placeholder="Conte-nos sobre seu projeto..."
              rows={4}
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-purple-primary/15 rounded-lg text-white text-sm outline-none focus:border-purple-primary transition-colors resize-y"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-400 text-sm mb-4 text-center">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mb-4 text-center">{errorMsg}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-purple-primary text-white rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 hover:bg-purple-glow hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </FadeUp>
    </section>
  );
}
