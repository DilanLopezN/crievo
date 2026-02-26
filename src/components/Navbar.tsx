"use client";

import { useState } from "react";
import Link from "next/link";
import CrievoLogo from "./CrievoLogo";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 px-15 py-4 items-center justify-between bg-bg-dark/80 backdrop-blur-xl border-b border-purple-primary/10">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-white no-underline">
          <CrievoLogo />
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

      {/* Mobile navbar */}
      <nav className="flex md:hidden fixed top-0 w-full z-50 px-6 py-4 items-center justify-between bg-bg-dark/80 backdrop-blur-xl border-b border-purple-primary/10">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-white no-underline">
          <CrievoLogo />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer bg-transparent border-none"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-light text-2xl font-medium hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
