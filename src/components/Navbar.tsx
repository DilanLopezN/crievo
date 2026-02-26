"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CrievoLogo from "./CrievoLogo";

const productSubLinks = [
  { href: "/produtos", label: "ERP - Gestão Empresarial" },
  { href: "/produtos/design", label: "Design & Marketing" },
  { href: "/produtos/delivery", label: "Soluções para Delivery" },
];

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Processo" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLLIElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 px-15 py-4 items-center justify-between bg-bg-dark/80 backdrop-blur-xl border-b border-purple-primary/10">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-white no-underline">
          <CrievoLogo />
        </Link>
        <ul className="flex gap-8 list-none items-center">
          <li key="servicos">
            <Link
              href="/#servicos"
              className="text-gray-light text-sm hover:text-white transition-colors duration-300"
            >
              Serviços
            </Link>
          </li>

          {/* Desktop Products with dropdown */}
          <li
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="text-gray-light text-sm hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer flex items-center gap-1 p-0 font-inherit"
            >
              Produtos
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Desktop dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-bg-card/95 backdrop-blur-xl border border-purple-primary/20 rounded-xl shadow-[0_8px_30px_rgba(139,92,246,0.15)] overflow-hidden transition-all duration-200 ${
                productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {productSubLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block px-4 py-3 text-gray-light text-sm hover:text-white hover:bg-purple-primary/10 transition-colors duration-200"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </li>

          {links.slice(1).map((link) => (
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
        <ul className="flex flex-col items-center gap-6 list-none">
          <li>
            <Link
              href="/#servicos"
              onClick={() => setOpen(false)}
              className="text-gray-light text-2xl font-medium hover:text-white transition-colors duration-300"
            >
              Serviços
            </Link>
          </li>

          {/* Mobile Products with expandable submenu */}
          <li className="flex flex-col items-center">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="text-gray-light text-2xl font-medium hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer flex items-center gap-2 p-0 font-inherit"
            >
              Produtos
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile submenu */}
            <div
              className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                mobileProductsOpen ? "max-h-60 mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"
              }`}
            >
              {productSubLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => {
                    setOpen(false);
                    setMobileProductsOpen(false);
                  }}
                  className="text-gray-light text-lg hover:text-purple-light transition-colors duration-200"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </li>

          {links.slice(1).map((link) => (
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
