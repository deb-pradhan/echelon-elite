"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/communities", label: "Communities" },
  { href: "/developers", label: "Developers" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[800ms] ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src={isScrolled ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
              alt="Echelon Elite"
              width={140}
              height={32}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-normal tracking-[0.1em] uppercase transition-colors duration-[400ms] ${
                  isScrolled
                    ? "text-void hover:text-gilt"
                    : "text-paper hover:text-gilt"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-8 py-3 text-[12px] font-normal tracking-[0.1em] uppercase transition-all duration-[400ms] ${
                isScrolled
                  ? "bg-void text-paper hover:bg-[#1a1d24] hover:-translate-y-0.5"
                  : "border border-paper/30 text-paper hover:bg-paper hover:text-void"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[1px] transition-all duration-[400ms] ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[7px] bg-paper"
                    : isScrolled
                    ? "bg-void"
                    : "bg-paper"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              />
              <span
                className={`block h-[1px] transition-all duration-[400ms] ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-void"
                    : "bg-paper"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              />
              <span
                className={`block h-[1px] transition-all duration-[400ms] ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-[7px] bg-paper"
                    : isScrolled
                    ? "bg-void"
                    : "bg-paper"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-void z-40 transition-all duration-[800ms] ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-paper font-[family-name:var(--font-playfair)] text-4xl md:text-5xl hover:text-gilt transition-colors duration-[400ms]"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-ghost mt-8"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
