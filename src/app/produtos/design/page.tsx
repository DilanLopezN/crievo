"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const services = [
  {
    icon: "🎨",
    title: "Identidade Visual",
    desc: "Logotipos, paleta de cores, tipografia e manual de marca completo que transmitem a essência do seu negócio.",
  },
  {
    icon: "📱",
    title: "Social Media Design",
    desc: "Criação de posts, stories, carrosséis e capas para todas as redes sociais com identidade visual consistente.",
  },
  {
    icon: "🖥️",
    title: "UI/UX Design",
    desc: "Interfaces intuitivas e atraentes para sites, aplicativos e plataformas digitais focadas na experiência do usuário.",
  },
  {
    icon: "📦",
    title: "Design de Embalagens",
    desc: "Embalagens criativas e funcionais que destacam seu produto na prateleira e reforçam sua marca.",
  },
  {
    icon: "📊",
    title: "Apresentações Corporativas",
    desc: "Apresentações profissionais para pitchs, reuniões e eventos que impressionam e convertem.",
  },
  {
    icon: "🎬",
    title: "Motion Design",
    desc: "Animações e vídeos para redes sociais, anúncios e conteúdo institucional que capturam atenção.",
  },
  {
    icon: "📢",
    title: "Campanhas de Marketing",
    desc: "Estratégia e criação de campanhas completas para Google Ads, Meta Ads e mídia offline.",
  },
  {
    icon: "📈",
    title: "Consultoria de Marca",
    desc: "Análise de posicionamento, pesquisa de mercado e estratégia de branding para fortalecer sua marca.",
  },
];

const stats = [
  { value: "200+", label: "Marcas criadas" },
  { value: "5k+", label: "Peças produzidas" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "48h", label: "Tempo médio de entrega" },
];

const plans = [
  {
    name: "Starter",
    price: "697",
    desc: "Para pequenas empresas que precisam de presença visual profissional",
    features: [
      "8 posts/mês para redes sociais",
      "Stories e capas",
      "1 revisão por peça",
      "Entrega em 48h",
      "Suporte por chat",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "1.497",
    desc: "Para empresas que querem crescer com marketing visual de impacto",
    features: [
      "16 posts/mês para redes sociais",
      "Stories, Reels e carrosséis",
      "Campanhas de ads (criativo)",
      "2 revisões por peça",
      "Relatório mensal de performance",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Sob consulta",
    desc: "Para operações que precisam de uma equipe criativa completa",
    features: [
      "Tudo do Growth",
      "Motion design",
      "Identidade visual completa",
      "UI/UX para plataformas",
      "Consultoria de marca",
      "Equipe dedicada",
      "Reuniões semanais",
    ],
    highlight: false,
  },
];

export default function DesignPage() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 60; i++) {
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
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-15 pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(236,72,153,0.25), transparent 70%),
              radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent 60%),
              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(236,72,153,0.15), transparent 60%)
            `,
          }}
        />
        <div ref={starsRef} className="absolute inset-0 z-0 overflow-hidden" />

        <div className="relative z-10 text-center max-w-[900px]">
          <FadeUp>
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-primary/30 bg-purple-primary/10 text-purple-light text-sm font-medium mb-6">
              Design & Marketing
            </div>
          </FadeUp>
          <FadeUp>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Design que{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                vende
              </span>{" "}
              e marca que{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                conecta.
              </span>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="text-gray-light text-lg md:text-xl leading-relaxed mb-10 max-w-[700px] mx-auto">
              Sua empresa merece uma identidade visual que se destaque. Criamos designs que{" "}
              <strong className="text-white">capturam atenção</strong>, comunicam{" "}
              <strong className="text-white">profissionalismo</strong> e{" "}
              <strong className="text-white">convertem visitantes em clientes</strong>.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#planos"
                className="inline-block px-9 py-4 bg-purple-primary text-white rounded-lg font-semibold text-base no-underline transition-all duration-300 hover:bg-purple-glow hover:-translate-y-0.5 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]"
              >
                Ver planos e preços
              </Link>
              <Link
                href="https://wa.me/5511944502819?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Design%20%26%20Marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-4 border border-purple-primary/40 text-white rounded-lg font-semibold text-base no-underline transition-all duration-300 hover:border-purple-primary hover:bg-purple-primary/10 hover:-translate-y-0.5"
              >
                Falar com especialista
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-15 bg-bg-card">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-mid text-sm">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-15">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Soluções criativas para{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                cada necessidade.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Do branding ao marketing digital, temos tudo que sua marca precisa para se destacar.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
                <div className="group relative bg-white/[0.03] border border-purple-primary/10 rounded-2xl p-7 transition-all duration-400 hover:border-purple-primary/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h3 className="text-base font-semibold mb-2">{svc.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-24 px-6 md:px-15 bg-bg-card">
        <div className="max-w-[1100px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Planos de{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                Design & Marketing.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Designs profissionais sem precisar contratar um time interno. Cancele quando quiser.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
                <div
                  className={`relative bg-white/[0.03] border rounded-2xl p-8 h-full flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${
                    plan.highlight
                      ? "border-purple-primary shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                      : "border-purple-primary/10"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-primary text-white text-xs font-semibold">
                      Mais popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-mid text-sm mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    {plan.price === "Sob consulta" ? (
                      <span className="text-2xl font-bold">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-gray-mid text-sm">R$</span>
                        <span className="text-4xl font-extrabold mx-1">{plan.price}</span>
                        <span className="text-gray-mid text-sm">/mês</span>
                      </>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-sm text-gray-light">
                        <span className="text-purple-primary text-base">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contato"
                    className={`block text-center px-6 py-3.5 rounded-lg font-semibold text-sm no-underline transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlight
                        ? "bg-purple-primary text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:bg-purple-glow hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                        : "border border-purple-primary/30 text-white hover:border-purple-primary hover:bg-purple-primary/10"
                    }`}
                  >
                    {plan.price === "Sob consulta" ? "Falar com consultor" : "Começar agora"}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="relative py-24 px-6 md:px-15 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.2), transparent 70%)`,
          }}
        />
        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua marca merece{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                destaque no mercado.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-gray-light text-lg leading-relaxed mb-10">
              Converse com nosso time criativo e descubra como podemos transformar a presença visual da sua empresa.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5511944502819?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Design%20%26%20Marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-4 bg-purple-primary text-white rounded-lg font-semibold text-base no-underline transition-all duration-300 hover:bg-purple-glow hover:-translate-y-0.5 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]"
              >
                Falar com especialista
              </Link>
              <Link
                href="/"
                className="inline-block px-9 py-4 border border-purple-primary/40 text-white rounded-lg font-semibold text-base no-underline transition-all duration-300 hover:border-purple-primary hover:bg-purple-primary/10 hover:-translate-y-0.5"
              >
                Voltar ao site
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
