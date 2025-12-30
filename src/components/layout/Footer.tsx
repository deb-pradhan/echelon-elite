"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigationLinks = {
  properties: [
    { href: "/properties", label: "All Properties" },
    { href: "/properties?type=penthouse", label: "Penthouses" },
    { href: "/properties?type=villa", label: "Villas" },
    { href: "/properties?type=apartment", label: "Apartments" },
    { href: "/properties?status=off-plan", label: "Off-Plan" },
  ],
  developers: [
    { href: "/developers/emaar", label: "Emaar" },
    { href: "/developers/sobha", label: "Sobha Realty" },
    { href: "/developers/damac", label: "DAMAC" },
    { href: "/developers/nakheel", label: "Nakheel" },
    { href: "/developers", label: "All Developers" },
  ],
  communities: [
    { href: "/communities/palm-jumeirah", label: "Palm Jumeirah" },
    { href: "/communities/downtown", label: "Downtown Dubai" },
    { href: "/communities/dubai-marina", label: "Dubai Marina" },
    { href: "/communities/emirates-hills", label: "Emirates Hills" },
    { href: "/communities", label: "All Communities" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/golden-visa", label: "Golden Visa" },
    { href: "/investor-services", label: "Investor Services" },
    { href: "/blog", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/faq", label: "FAQ" },
  ],
};

const socialLinks = [
  { 
    href: "https://instagram.com/echelonelite", 
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  { 
    href: "https://linkedin.com/company/echelonelite", 
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
];

export function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer className="footer">
      <div className="container-luxury">
        {/* Contact CTA Section - Hidden on contact page */}
        {!isContactPage && (
          <div className="border-t border-paper/10 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-normal tracking-[-0.02em] text-white">
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
        )}

        {/* Main Footer Links */}
        <div className="border-t border-paper/10 py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Properties */}
            <div>
              <h3 className="text-label text-gilt mb-6">Properties</h3>
              <ul className="space-y-4">
                {navigationLinks.properties.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-label text-gilt mb-6">Developers</h3>
              <ul className="space-y-4">
                {navigationLinks.developers.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communities */}
            <div>
              <h3 className="text-label text-gilt mb-6">Communities</h3>
              <ul className="space-y-4">
                {navigationLinks.communities.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-label text-gilt mb-6">Company</h3>
              <ul className="space-y-4">
                {navigationLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2">
              <h3 className="text-label text-gilt mb-6">Get in Touch</h3>
              
              {/* Office Address */}
              <div className="mb-8">
                <p className="text-[14px] text-paper/50 leading-relaxed">
                  Echelon Elite Properties LLC,<br />
                  613, One Offices | One Za&apos;abeel,<br />
                  2nd Street - Zaa&apos;beel First - Za&apos;abeel,<br />
                  Dubai, UAE
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-3 mb-8">
                <a 
                  href="tel:+971522432567" 
                  className="flex items-center gap-3 text-[14px] text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                >
                  <svg className="w-4 h-4 text-gilt" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +971 52 243 2567
                </a>
                <a 
                  href="mailto:admin@echelonelite.ae" 
                  className="flex items-center gap-3 text-[14px] text-paper/50 hover:text-paper transition-colors duration-[400ms]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                >
                  <svg className="w-4 h-4 text-gilt" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  admin@echelonelite.ae
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 flex items-center justify-center border border-paper/20 text-paper/50 hover:text-gilt hover:border-gilt transition-all duration-[400ms]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo & Legal */}
        <div className="border-t border-paper/10 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Image
                src="/images/logo-light.svg"
                alt="Echelon Elite"
                width={140}
                height={36}
                className="h-9 w-auto opacity-90"
              />
              <span className="hidden md:block text-[13px] text-paper/30">
                Dubai&apos;s Premier Luxury Property Consultants
              </span>
            </div>

            {/* Legal Links */}
            <nav className="flex flex-wrap items-center gap-8">
              {navigationLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] tracking-[0.1em] uppercase text-paper/40 hover:text-paper transition-colors duration-[400ms]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-paper/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.05em] text-paper/30">
            © {new Date().getFullYear()} Echelon Elite. All rights reserved. RERA ORN: 52350
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[11px] tracking-[0.05em] text-paper/30 hover:text-paper/60 transition-colors duration-[400ms] cursor-pointer flex items-center gap-2"
            style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
          >
            Back to top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
