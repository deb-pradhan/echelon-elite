"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/communities", label: "Communities" },
  { href: "/developers", label: "Developers" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
];

// Pages with light backgrounds that need dark header
const lightBackgroundPages = ["/contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if current page has a light background
  const isLightPage = lightBackgroundPages.includes(pathname);
  const useDarkHeader = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-[800ms] ${
          isMobileMenuOpen
            ? "z-[60] bg-transparent py-6"
            : isScrolled
            ? "z-50 bg-paper/95 backdrop-blur-md py-4"
            : isLightPage
            ? "z-50 bg-paper py-6"
            : "z-50 bg-transparent py-6"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-[60]">
              <Image
                src={useDarkHeader && !isMobileMenuOpen ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
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
                    useDarkHeader
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
                  useDarkHeader
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
              className="lg:hidden relative z-[60] p-2 -mr-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block w-full h-[1.5px] origin-center transition-all duration-[400ms] ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-[9px] bg-white"
                      : useDarkHeader
                      ? "bg-void"
                      : "bg-white"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                />
                <span
                  className={`block w-full h-[1.5px] transition-all duration-[400ms] ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-x-0"
                      : useDarkHeader
                      ? "bg-void"
                      : "bg-white"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                />
                <span
                  className={`block w-full h-[1.5px] origin-center transition-all duration-[400ms] ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-[9px] bg-white"
                      : useDarkHeader
                      ? "bg-void"
                      : "bg-white"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Outside header for proper stacking */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-[600ms] ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
      >
        {/* Background */}
        <div 
          className={`absolute inset-0 bg-void transition-transform duration-[600ms] ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl hover:text-gilt transition-all duration-[400ms] ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${150 + index * 75}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div 
            className={`mt-12 transition-all duration-[400ms] ${
              isMobileMenuOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? "550ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white text-[12px] font-normal tracking-[0.1em] uppercase hover:bg-white hover:text-void transition-all duration-[400ms]"
              style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Contact Info */}
          <div 
            className={`absolute bottom-12 left-0 right-0 flex justify-center transition-all duration-[400ms] ${
              isMobileMenuOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? "650ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            <a 
              href="tel:+97145551234" 
              className="text-white/50 text-sm tracking-wider hover:text-gilt transition-colors"
            >
              +971 4 555 1234
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
