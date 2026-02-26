"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const features = [
  {
    icon: "📱",
    title: "App Próprio para seu Delivery",
    desc: "Aplicativo personalizado com a sua marca para iOS e Android. Seus clientes pedem direto, sem taxas de marketplace.",
  },
  {
    icon: "🗺️",
    title: "Rastreamento em Tempo Real",
    desc: "Seus clientes acompanham o pedido do preparo à entrega com mapa ao vivo e notificações automáticas.",
  },
  {
    icon: "🧾",
    title: "Gestão de Pedidos",
    desc: "Painel centralizado para gerenciar todos os pedidos de todos os canais: app, WhatsApp, iFood, Rappi e balcão.",
  },
  {
    icon: "💳",
    title: "Pagamento Integrado",
    desc: "Pix, cartão de crédito/débito, vale-refeição e dinheiro. Tudo integrado com conciliação automática.",
  },
  {
    icon: "📊",
    title: "Relatórios & Analytics",
    desc: "Saiba quais pratos mais vendem, horários de pico, ticket médio, taxa de recompra e muito mais.",
  },
  {
    icon: "🔔",
    title: "Marketing Automático",
    desc: "Cupons, programas de fidelidade, push notifications e campanhas de reativação de clientes inativos.",
  },
  {
    icon: "🍕",
    title: "Cardápio Digital",
    desc: "Cardápio online bonito e fácil de atualizar, com fotos, variações, adicionais e combos inteligentes.",
  },
  {
    icon: "🚀",
    title: "Integração com iFood & Rappi",
    desc: "Receba pedidos dos marketplaces no mesmo painel. Sem precisar de vários tablets ou impressoras.",
  },
];

const stats = [
  { value: "30%", label: "Economia vs. taxas de marketplace" },
  { value: "2x", label: "Mais pedidos recorrentes" },
  { value: "15min", label: "Setup do cardápio digital" },
  { value: "24/7", label: "Seu delivery funcionando" },
];

const plans = [
  {
    name: "Básico",
    price: "297",
    desc: "Para quem está começando no delivery e quer sair dos marketplaces",
    features: [
      "Cardápio digital",
      "Gestão de pedidos",
      "Pagamento integrado (Pix + cartão)",
      "Até 200 pedidos/mês",
      "Suporte por chat",
    ],
    highlight: false,
  },
  {
    name: "Profissional",
    price: "597",
    desc: "Para restaurantes que querem escalar seu delivery com tecnologia",
    features: [
      "Tudo do Básico",
      "App próprio (iOS + Android)",
      "Rastreamento em tempo real",
      "Integração iFood & Rappi",
      "Marketing automático",
      "Pedidos ilimitados",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Rede",
    price: "Sob consulta",
    desc: "Para redes e franquias com múltiplas unidades",
    features: [
      "Tudo do Profissional",
      "Multi-unidades",
      "Relatórios consolidados",
      "API para integrações",
      "Gerente de sucesso dedicado",
      "SLA garantido",
      "Customizações sob medida",
    ],
    highlight: false,
  },
];

export default function DeliveryPage() {
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
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.2), transparent 70%),
              radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent 60%),
              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(249,115,22,0.1), transparent 60%)
            `,
          }}
        />
        <div ref={starsRef} className="absolute inset-0 z-0 overflow-hidden" />

        <div className="relative z-10 text-center max-w-[900px]">
          <FadeUp>
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-primary/30 bg-purple-primary/10 text-purple-light text-sm font-medium mb-6">
              Soluções para Delivery
            </div>
          </FadeUp>
          <FadeUp>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Seu delivery{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                sem taxas abusivas.
              </span>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="text-gray-light text-lg md:text-xl leading-relaxed mb-10 max-w-[700px] mx-auto">
              Pare de pagar até 27% de comissão para marketplaces. Tenha seu{" "}
              <strong className="text-white">app próprio de delivery</strong>, gerencie pedidos de{" "}
              <strong className="text-white">todos os canais em um só lugar</strong> e{" "}
              <strong className="text-white">aumente seu lucro</strong>.
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
                href="#contato"
                className="inline-block px-9 py-4 border border-purple-primary/40 text-white rounded-lg font-semibold text-base no-underline transition-all duration-300 hover:border-purple-primary hover:bg-purple-primary/10 hover:-translate-y-0.5"
              >
                Agendar demonstração
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

      {/* Features */}
      <section className="py-24 px-6 md:px-15">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Tudo que seu delivery precisa para{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                crescer.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Do cardápio digital ao rastreamento, uma plataforma completa para seu negócio de delivery.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
                <div className="group relative bg-white/[0.03] border border-purple-primary/10 rounded-2xl p-7 transition-all duration-400 hover:border-purple-primary/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="text-3xl mb-4">{feat.icon}</div>
                  <h3 className="text-base font-semibold mb-2">{feat.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{feat.desc}</p>
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
              Planos para{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                cada tamanho de operação.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Sem taxa por pedido. Sem surpresas. Só crescimento.
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
              Pare de perder dinheiro com{" "}
              <span className="line-through text-gray-mid">taxas</span>.{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                Tenha seu próprio canal.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-gray-light text-lg leading-relaxed mb-10">
              Agende uma demonstração gratuita e veja como nossa plataforma pode aumentar o lucro do seu delivery.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20Delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-4 bg-purple-primary text-white rounded-lg font-semibold text-base no-underline transition-all duration-300 hover:bg-purple-glow hover:-translate-y-0.5 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]"
              >
                Agendar demonstração grátis
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
