import FadeUp from "./FadeUp";

export default function Diferencial() {
  return (
    <section id="diferencial" className="py-24 px-6 md:px-15">
      <FadeUp className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-[1100px] mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <svg viewBox="0 0 120 120" fill="none" className="w-24 h-24">
            <path d="M60 10L20 40v40l40 30 40-30V40L60 10z" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
            <path d="M40 55c0-11 9-20 20-20s20 9 20 20-9 20-20 20" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
            <path d="M46 44l14-6 14 6-14 20-14-20z" fill="#8b5cf6" opacity="0.5" />
          </svg>
          <span className="text-2xl font-bold">Crievo</span>
        </div>

        {/* Text */}
        <div className="max-w-[450px] text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Nosso Diferencial</h2>
          <p className="text-gray-light leading-relaxed">
            Cada projeto é construído com visão estratégica e atenção aos detalhes. Entregamos
            resultados que vão além do esperado, pensando em performance, escalabilidade e
            usabilidade desde o início.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
