"use client";

import Link from "next/link";
import CrievoLogo from "./CrievoLogo";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <nav className="hidden md:flex fixed top-0 w-full z-50 px-15 py-4 items-center justify-between bg-bg-dark/80 backdrop-blur-xl border-b border-purple-primary/10">
      <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-white no-underline">
        <CrievoLogo />
        Crievo
      </Link>
      <ul className="flex gap-8 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-light text-sm hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
