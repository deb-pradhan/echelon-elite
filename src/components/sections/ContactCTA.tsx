import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="section-padding section-dark relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Title */}
          <div>
            <h2
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-paper tracking-[-0.02em] opacity-100 translate-y-0"
              style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
            >
              Contact
            </h2>
          </div>

          {/* Right - CTA Content */}
          <div>
            <h3
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-paper mb-6 tracking-[-0.01em] opacity-100 translate-y-0"
              style={{ 
                transitionDelay: "100ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              Lets start a conversation
            </h3>
            <p
              className="text-lg text-paper/60 mb-10 opacity-100 translate-y-0"
              style={{ 
                transitionDelay: "200ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              Join us for a chat to talk about your investment goals
            </p>
            <Link
              href="/contact"
              className="btn-ghost opacity-100 translate-y-0"
              style={{ 
                transitionDelay: "300ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
