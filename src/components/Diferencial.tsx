import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Diferencial() {
  return (
    <section id="diferencial" className="py-24 px-6 md:px-15">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-[1100px] mx-auto">
        {/* Logo */}
        <FadeUp variant="fade-left" className="flex flex-col items-center gap-3">
          <Image src="/crievo.svg" alt="Crievo" width={96} height={96} />
          <span className="text-2xl font-bold">Crievo</span>
        </FadeUp>

        {/* Text */}
        <FadeUp variant="fade-right" className="max-w-[450px] text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Nosso Diferencial</h2>
          <p className="text-gray-light leading-relaxed">
            Cada projeto é construído com visão estratégica e atenção aos detalhes. Entregamos
            resultados que vão além do esperado, pensando em performance, escalabilidade e
            usabilidade desde o início.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
