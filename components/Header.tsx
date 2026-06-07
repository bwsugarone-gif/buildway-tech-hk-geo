"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const companyName = "Buildway Tech (HK) Limited";

const navLinks = [
  { href: "/#value", label: "價值" },
  { href: "/#services", label: "服務方案" },
  { href: "/cases", label: "成功案例" },
  { href: "/blog", label: "AI 專欄" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-blue-100/70 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={`${companyName} logo`}
              width={120}
              height={40}
              priority
              className="h-8 w-auto shrink-0 object-contain"
            />
            <span className="hidden text-base font-semibold tracking-tight text-slate-900 sm:block">
              {companyName}
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#assessment"
            className="ml-4 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            免費 AI 評估
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-blue-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-2 p-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md p-3 text-base font-semibold text-slate-700 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#assessment"
                className="mt-2 rounded-xl bg-blue-600 p-4 text-center text-base font-semibold text-white shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                免費 AI 評估
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
