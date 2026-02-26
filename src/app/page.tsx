import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Diferencial from "@/components/Diferencial";
import Processo from "@/components/Processo";
import Portfolio from "@/components/Portfolio";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Diferencial />
      <Processo />
      <Portfolio />
      <Contato />
      <Footer />
    </main>
  );
}
