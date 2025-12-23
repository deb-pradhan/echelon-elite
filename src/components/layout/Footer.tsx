"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-luxury">
        {/* Contact CTA Section */}
        <div className="border-t border-paper/10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-normal tracking-[-0.02em]">
                Contact
              </h2>
            </div>
            <div className="lg:col-span-7 lg:max-w-lg">
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl italic font-normal text-paper/90 mb-6">
                Let&apos;s start a conversation
              </p>
              <p className="text-paper/50 mb-12 leading-relaxed">
                Join us for a chat to talk about your property investment goals
              </p>
              <Link href="/contact" className="btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="border-t border-paper/10 py-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Logo */}
            <div className="lg:flex-shrink-0">
              <Image
                src="/images/logo-light.svg"
                alt="Echelon Elite"
                width={140}
                height={36}
                className="h-9 w-auto opacity-90"
              />
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {/* Navigation */}
              <nav>
                <ul className="flex flex-wrap gap-x-10 gap-y-4">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[12px] tracking-[0.1em] uppercase text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social */}
              <div className="flex gap-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[12px] tracking-[0.1em] uppercase text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-paper/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.05em] text-paper/30">
            © {new Date().getFullYear()} Echelon Elite. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[11px] tracking-[0.05em] text-paper/30 hover:text-paper/60 transition-colors duration-[400ms] cursor-pointer"
            style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
