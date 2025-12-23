"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-void/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury pb-32 md:pb-40">
        <div className="max-w-2xl">
          {/* Label */}
          <div
            className={`text-label text-paper/80 mb-8 transition-all duration-[1000ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Property Finder Service
          </div>

          {/* Main Heading */}
          <h1
            className={`font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-[80px] text-paper leading-[1.05] tracking-[-0.03em] mb-8 transition-all duration-[1000ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              transitionDelay: "100ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Luxury property
            <br />
            <em className="font-normal">experts</em>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg text-paper/80 max-w-md leading-relaxed mb-12 transition-all duration-[1000ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              transitionDelay: "200ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Elevate your living experience with our refined residences, we
            handpick superior properties aligned with your outlook.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-5 transition-all duration-[1000ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "300ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            <Link href="/contact" className="btn-primary">
              Get a quote
            </Link>
            <a
              href="tel:+97145551234"
              className="btn-ghost inline-flex items-center gap-3"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +971 4 555 1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
