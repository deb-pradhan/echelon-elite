"use client";

import { useState } from "react";
import { Select } from "@/components/ui/Select";

const interestOptions = [
  { value: "apartments", label: "Luxury Apartments" },
  { value: "villas", label: "Premium Villas" },
  { value: "branded", label: "Branded Residences" },
  { value: "offplan", label: "Off-Plan Investments" },
  { value: "golden-visa", label: "Golden Visa Properties" },
  { value: "other", label: "Other / Not Sure" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-20 bg-void">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <span className="text-label text-gilt block mb-8">Contact Us</span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-paper leading-tight tracking-[-0.02em] mb-8">
              Begin Your <em>Investment</em>
              <br />
              Journey
            </h1>
            <p className="text-xl text-paper/50">
              Schedule a consultation with our investment advisors. We&apos;ll
              curate properties tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-paper">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name */}
                  <div>
                    <label className="text-label text-void/50 block mb-4">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="input-line"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-label text-void/50 block mb-4">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input-line"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-label text-void/50 block mb-4">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="input-line"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="text-label text-void/50 block mb-4">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="input-line"
                      placeholder="United Kingdom"
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label className="text-label text-void/50 block mb-4">
                    I&apos;m interested in
                  </label>
                  <Select
                    value={formData.interest}
                    onChange={(value) =>
                      setFormData({ ...formData, interest: value })
                    }
                    options={interestOptions}
                    placeholder="Select Your Interest"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-label text-void/50 block mb-4">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="input-line resize-none"
                    placeholder="Tell us about your investment goals, preferred locations, or any specific requirements..."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-secondary">
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="bg-void p-12 text-paper h-full">
                <span className="text-label text-gilt block mb-10">
                  Get in Touch
                </span>

                <div className="space-y-10">
                  {/* Phone */}
                  <div>
                    <span className="text-paper/40 text-sm block mb-3">
                      Phone
                    </span>
                    <a
                      href="tel:+97145551234"
                      className="text-lg hover:text-gilt transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      +971 4 555 1234
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <span className="text-paper/40 text-sm block mb-3">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/97145551234"
                      className="text-lg hover:text-gilt transition-colors duration-[400ms] inline-flex items-center gap-3"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      +971 4 555 1234
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="text-paper/40 text-sm block mb-3">
                      Email
                    </span>
                    <a
                      href="mailto:invest@echelonelite.ae"
                      className="text-lg hover:text-gilt transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      invest@echelonelite.ae
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <span className="text-paper/40 text-sm block mb-3">
                      Office
                    </span>
                    <p className="text-lg leading-relaxed">
                      DIFC, Gate Building
                      <br />
                      Level 15
                      <br />
                      Dubai, UAE
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <span className="text-paper/40 text-sm block mb-3">
                      Hours
                    </span>
                    <p>
                      Sunday - Thursday: 9am - 6pm
                      <br />
                      Saturday: 10am - 4pm
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-14 pt-10 border-t border-paper/10">
                  <span className="text-paper/40 text-sm block mb-5">
                    Follow Us
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-11 h-11 border border-paper/20 flex items-center justify-center hover:border-gilt hover:text-gilt transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 border border-paper/20 flex items-center justify-center hover:border-gilt hover:text-gilt transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 border border-paper/20 flex items-center justify-center hover:border-gilt hover:text-gilt transition-colors duration-[400ms]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
