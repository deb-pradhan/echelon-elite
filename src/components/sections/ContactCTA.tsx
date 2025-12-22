"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";

export function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-midnight relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-luxury relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <span
            className={`text-label text-gold block mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Begin Your Journey
          </span>

          {/* Heading */}
          <h2
            className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-alabaster leading-tight mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ready to invest in
            <br />
            <em>Dubai&apos;s finest</em> properties?
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-alabaster/60 max-w-xl mb-12 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Schedule a private consultation with our investment advisors.
            We&apos;ll curate a selection of properties tailored to your
            requirements.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button href="/contact" variant="ghost-light">
              Schedule Consultation
            </Button>
            <a
              href="https://wa.me/97145551234"
              className="inline-flex items-center gap-3 text-alabaster/70 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="text-sm">WhatsApp Us</span>
            </a>
          </div>

          {/* Contact Info */}
          <div
            className={`mt-16 pt-16 border-t border-alabaster/10 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="text-label text-alabaster/30 block mb-2">
                Phone
              </span>
              <a
                href="tel:+97145551234"
                className="text-alabaster hover:text-gold transition-colors"
              >
                +971 4 555 1234
              </a>
            </div>
            <div>
              <span className="text-label text-alabaster/30 block mb-2">
                Email
              </span>
              <a
                href="mailto:invest@echelonelite.ae"
                className="text-alabaster hover:text-gold transition-colors"
              >
                invest@echelonelite.ae
              </a>
            </div>
            <div>
              <span className="text-label text-alabaster/30 block mb-2">
                Location
              </span>
              <span className="text-alabaster">DIFC, Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

