import FadeUp from "./FadeUp";

const steps = [
  { step: "Passo 1", title: "Estratégia & Definição", desc: "Entendemos seu negócio, definimos objetivos e traçamos a melhor estratégia digital." },
  { step: "Passo 2", title: "Design & Experiência", desc: "Criamos interfaces intuitivas e visualmente impactantes para seus usuários." },
  { step: "Passo 3", title: "Desenvolvimento", desc: "Código limpo, performático e escalável com as melhores tecnologias do mercado." },
  { step: "Passo 4", title: "Lançamento & Suporte", desc: "Deploy otimizado e acompanhamento contínuo para garantir o melhor resultado." },
];

export default function Processo() {
  return (
    <section id="processo" className="py-24 px-6 md:px-15 bg-bg-card">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 uppercase">Processo</h2>
      </FadeUp>
      <FadeUp>
        <p className="text-center text-gray-mid text-sm mb-15">Como Desenvolvemos</p>
      </FadeUp>

      <div className="relative max-w-[900px] mx-auto">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-primary to-purple-primary/10 -translate-x-1/2" />

        {steps.map((s, i) => (
          <FadeUp key={i}>
            <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-14 relative ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className="flex-1 md:py-4">
                <h3 className="text-xs text-purple-light font-medium uppercase tracking-widest mb-1.5">{s.step}</h3>
                <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-mid text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Image placeholder */}
              <div className="flex-1 aspect-video bg-white/5 rounded-xl border border-purple-primary/10" />

              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 top-7 w-4 h-4 rounded-full bg-purple-primary border-[3px] border-bg-card -translate-x-1/2 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10" />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
