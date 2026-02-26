import FadeUp from "./FadeUp";

const services = [
  { num: "01", title: "Landing Page", desc: "Páginas de alta conversão focadas em resultados e performance." },
  { num: "02", title: "Sites Institucionais", desc: "Websites profissionais que transmitem credibilidade e confiança." },
  { num: "03", title: "Aplicativos", desc: "Apps nativos e multiplataforma com foco na experiência do usuário." },
  { num: "04", title: "Sistemas SaaS", desc: "Plataformas escaláveis e robustas para o seu negócio digital." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 md:px-15 bg-bg-card">
      <FadeUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">O Que Fazemos</h2>
      </FadeUp>
      <FadeUp>
        <p className="text-center text-gray-mid text-sm mb-15">Desenvolvimento Digital Completo</p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1100px] mx-auto">
        {services.map((s) => (
          <FadeUp key={s.num}>
            <div className="group relative bg-white/[0.03] border border-purple-primary/10 rounded-2xl py-9 px-7 text-center transition-all duration-400 hover:border-purple-primary/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="text-4xl font-extrabold text-purple-primary/20 mb-3">{s.num}</div>
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-mid text-sm leading-relaxed">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
