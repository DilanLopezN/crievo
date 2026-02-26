"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const modules = [
  {
    icon: "📊",
    title: "Financeiro Completo",
    desc: "Contas a pagar, receber, fluxo de caixa, conciliação bancária e DRE em tempo real. Nunca mais perca o controle do seu dinheiro.",
  },
  {
    icon: "📦",
    title: "Estoque Inteligente",
    desc: "Controle multi-depósito, curva ABC, ponto de reposição automático e rastreabilidade total de lotes e séries.",
  },
  {
    icon: "🛒",
    title: "Vendas & CRM",
    desc: "Funil de vendas visual, propostas automatizadas, follow-up inteligente e histórico completo de cada cliente.",
  },
  {
    icon: "🧾",
    title: "Fiscal & Tributário",
    desc: "Emissão de NF-e, NFS-e, CT-e e SPED automáticos. Conformidade fiscal sem dor de cabeça.",
  },
  {
    icon: "👥",
    title: "RH & Departamento Pessoal",
    desc: "Folha de pagamento, controle de ponto, férias, benefícios e portal do colaborador integrado.",
  },
  {
    icon: "📈",
    title: "BI & Relatórios",
    desc: "Dashboards executivos em tempo real, relatórios customizáveis e alertas inteligentes para tomada de decisão.",
  },
  {
    icon: "🏭",
    title: "Produção & PCP",
    desc: "Ordens de produção, planejamento de capacidade, controle de qualidade e rastreio completo da cadeia produtiva.",
  },
  {
    icon: "🚚",
    title: "Logística & Expedição",
    desc: "Roteirização, rastreamento de entregas, gestão de frota e integração com transportadoras.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime garantido" },
  { value: "3x", label: "Mais produtividade" },
  { value: "50%", label: "Redução de custos operacionais" },
  { value: "2min", label: "Para gerar qualquer relatório" },
];

const testimonials = [
  {
    name: "Roberto Mendes",
    role: "CEO, Indústria Mendes Ltda.",
    text: "Antes gastávamos 3 dias para fechar o mês. Com o CrievoERP, fechamos em 2 horas. Transformou completamente nossa operação.",
  },
  {
    name: "Carla Ferreira",
    role: "Diretora Financeira, Grupo Vertice",
    text: "A visibilidade financeira que temos agora é de outro nível. Decisões que demoravam semanas agora são tomadas em minutos.",
  },
  {
    name: "Marcos Almeida",
    role: "COO, LogiTech Soluções",
    text: "Reduzimos nosso time de backoffice em 40% e mesmo assim somos mais eficientes. O ROI se pagou em 3 meses.",
  },
];

const plans = [
  {
    name: "Essencial",
    price: "497",
    desc: "Para pequenas empresas que querem profissionalizar a gestão",
    features: [
      "Financeiro completo",
      "Estoque básico",
      "Vendas & CRM",
      "Emissão de NF-e",
      "Até 5 usuários",
      "Suporte por chat",
    ],
    highlight: false,
  },
  {
    name: "Profissional",
    price: "997",
    desc: "Para empresas em crescimento que precisam de controle total",
    features: [
      "Tudo do Essencial",
      "RH & Dept. Pessoal",
      "BI & Dashboards",
      "Multi-empresa",
      "Até 25 usuários",
      "Suporte prioritário",
      "API & Integrações",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    desc: "Para grandes operações com necessidades específicas",
    features: [
      "Tudo do Profissional",
      "Produção & PCP",
      "Logística avançada",
      "Usuários ilimitados",
      "SLA garantido",
      "Gerente de sucesso dedicado",
      "Customizações sob medida",
    ],
    highlight: false,
  },
];

export default function ProdutosPage() {
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-15 pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.3), transparent 70%),
              radial-gradient(ellipse 50% 50% at 80% 20%, rgba(139,92,246,0.15), transparent 60%),
              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(76,29,149,0.2), transparent 60%)
            `,
          }}
        />
        <div ref={starsRef} className="absolute inset-0 z-0 overflow-hidden" />

        <div className="relative z-10 text-center max-w-[900px]">
          <FadeUp>
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-primary/30 bg-purple-primary/10 text-purple-light text-sm font-medium mb-6">
              Novo Produto Crievo
            </div>
          </FadeUp>
          <FadeUp>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Um ERP que{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                faz tudo
              </span>{" "}
              pela sua empresa.
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="text-gray-light text-lg md:text-xl leading-relaxed mb-10 max-w-[700px] mx-auto">
              Chega de 10 sistemas diferentes que não conversam entre si. O{" "}
              <strong className="text-white">CrievoERP</strong> unifica financeiro, estoque, vendas,
              RH, fiscal, produção e logística em uma{" "}
              <strong className="text-white">única plataforma inteligente</strong>.
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

      {/* Pain Points */}
      <section className="py-24 px-6 md:px-15 bg-bg-card">
        <div className="max-w-[1000px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Sua empresa ainda sofre com isso?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Se você se identifica com pelo menos um desses problemas, o CrievoERP foi feito para
              você.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Planilhas espalhadas que ninguém sabe qual é a versão certa",
              "Fechamento financeiro que demora dias (ou semanas)",
              "Estoque que nunca bate com o sistema",
              "Vendedores sem visibilidade do histórico do cliente",
              "Notas fiscais emitidas manualmente com medo de errar",
              "Decisões tomadas no achismo porque faltam dados confiáveis",
            ].map((pain, i) => (
              <FadeUp key={i} delay={i < 4 ? (`delay-${(i % 4 + 1) * 100}` as "delay-100") : undefined}>
                <div className="flex items-start gap-4 bg-white/[0.03] border border-red-500/10 rounded-xl p-5 transition-all duration-300 hover:border-red-500/20">
                  <span className="text-red-400 text-xl shrink-0 mt-0.5">✕</span>
                  <p className="text-gray-light text-sm leading-relaxed">{pain}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center mt-14">
              <p className="text-2xl md:text-3xl font-bold">
                Com o CrievoERP,{" "}
                <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                  todos esses problemas desaparecem.
                </span>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-15">
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

      {/* Modules */}
      <section className="py-24 px-6 md:px-15 bg-bg-card">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Tudo que sua empresa precisa.{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                Em um só lugar.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              8 módulos integrados que cobrem 100% da operação da sua empresa — do financeiro ao chão
              de fábrica.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
                <div className="group relative bg-white/[0.03] border border-purple-primary/10 rounded-2xl p-7 transition-all duration-400 hover:border-purple-primary/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="text-3xl mb-4">{mod.icon}</div>
                  <h3 className="text-base font-semibold mb-2">{mod.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{mod.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-15">
        <div className="max-w-[900px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Implementação sem{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                trauma.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Sabemos que trocar de sistema dá medo. Por isso criamos um processo suave que não para sua operação.
            </p>
          </FadeUp>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Diagnóstico gratuito",
                desc: "Analisamos sua operação atual, identificamos gargalos e desenhamos o plano de migração ideal — sem compromisso.",
              },
              {
                step: "02",
                title: "Migração assistida",
                desc: "Nossa equipe importa seus dados, configura os módulos e adapta o sistema à sua realidade. Você não precisa parar nenhum dia.",
              },
              {
                step: "03",
                title: "Treinamento da equipe",
                desc: "Treinamentos práticos e personalizados para cada departamento. Em 5 dias, seu time já opera com autonomia.",
              },
              {
                step: "04",
                title: "Acompanhamento contínuo",
                desc: "Suporte dedicado nos primeiros 90 dias e um gerente de sucesso para garantir que você extraia o máximo da plataforma.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
                <div className="flex gap-6 items-start bg-white/[0.02] border border-purple-primary/10 rounded-2xl p-7 transition-all duration-300 hover:border-purple-primary/20">
                  <div className="text-3xl font-extrabold text-purple-primary/30 shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-mid text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-15 bg-bg-card">
        <div className="max-w-[1000px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Quem usa,{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                recomenda.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16">
              Empresas reais com resultados reais.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={`delay-${(i % 4 + 1) * 100}` as "delay-100"}>
                <div className="bg-white/[0.03] border border-purple-primary/10 rounded-2xl p-7 h-full flex flex-col">
                  <p className="text-gray-light text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-mid text-xs">{t.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-24 px-6 md:px-15">
        <div className="max-w-[1100px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Planos que cabem no seu{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                bolso e na sua ambição.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-center text-gray-mid text-base mb-16 max-w-[600px] mx-auto">
              Sem surpresas. Sem taxa de implantação. Cancele quando quiser.
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

      {/* Final CTA */}
      <section
        id="contato"
        className="relative py-24 px-6 md:px-15 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.2), transparent 70%)
            `,
          }}
        />
        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pare de gerenciar no{" "}
              <span className="line-through text-gray-mid">caos</span>.{" "}
              <span className="bg-gradient-to-br from-purple-light to-purple-primary bg-clip-text text-transparent">
                Comece a liderar com dados.
              </span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-gray-light text-lg leading-relaxed mb-10">
              Agende uma demonstração gratuita de 30 minutos e veja como o CrievoERP pode transformar
              a gestão da sua empresa. Sem compromisso, sem cartão de crédito.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20uma%20demonstra%C3%A7%C3%A3o%20do%20CrievoERP"
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
          <FadeUp>
            <p className="text-gray-mid text-xs mt-8">
              Demonstração 100% gratuita &middot; Sem compromisso &middot; Suporte em português
            </p>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
