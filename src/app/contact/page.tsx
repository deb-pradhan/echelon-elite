"use client";

import { useState } from "react";

const steps = [
  { id: 1, name: "Interest", label: "Interest" },
  { id: 2, name: "Timeline", label: "Timeline" },
  { id: 3, name: "Budget", label: "Budget" },
  { id: 4, name: "Details", label: "Details" },
  { id: 5, name: "Message", label: "Message" },
];

const propertyTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "penthouse", label: "Penthouse" },
  { value: "townhouse", label: "Townhouse" },
  { value: "off-plan", label: "Off-Plan" },
  { value: "other", label: "Other" },
];

const timelines = [
  { value: "immediate", label: "Immediately" },
  { value: "1-3months", label: "1-3 Months" },
  { value: "3-6months", label: "3-6 Months" },
  { value: "6-12months", label: "6-12 Months" },
  { value: "exploring", label: "Just Exploring" },
];

const budgets = [
  { value: "1-2m", label: "AED 1-2 Million" },
  { value: "2-5m", label: "AED 2-5 Million" },
  { value: "5-10m", label: "AED 5-10 Million" },
  { value: "10-20m", label: "AED 10-20 Million" },
  { value: "20m+", label: "AED 20 Million+" },
];

const countries = [
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "India",
  "Pakistan",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Egypt",
  "Jordan",
  "Lebanon",
  "Russia",
  "China",
  "Germany",
  "France",
  "Italy",
  "Canada",
  "Australia",
  "Singapore",
  "Malaysia",
  "South Africa",
  "Nigeria",
  "Kenya",
  "Other",
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.propertyType !== "";
      case 2:
        return formData.timeline !== "";
      case 3:
        return formData.budget !== "";
      case 4:
        return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      case 5:
        return true;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-paper">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gilt/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-gilt" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-void mb-6 tracking-[-0.02em]">
              Thank You
            </h1>
            <p className="text-lg text-stone mb-10">
              We&apos;ve received your enquiry and will be in touch within 24 hours.
            </p>
            <a href="/" className="btn-secondary">
              Return Home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-paper pt-32 pb-20">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-void tracking-[-0.02em] mb-4">
              Express your Interest
            </h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-16">
            <div className="relative">
              {/* Background line */}
              <div className="absolute top-5 left-0 right-0 h-[2px] bg-void/10" />
              {/* Active line */}
              <div 
                className="absolute top-5 left-0 h-[2px] bg-gilt transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
              
              {/* Steps */}
              <div className="relative flex justify-between">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        step.id <= currentStep
                          ? "bg-void text-paper"
                          : "bg-void/10 text-void/40"
                      }`}
                    >
                      {step.id}
                    </div>
                    <span
                      className={`mt-3 text-[11px] uppercase tracking-[0.1em] transition-colors duration-300 ${
                        step.id <= currentStep ? "text-void" : "text-void/30"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Property Type */}
            <div className={`transition-all duration-500 ${currentStep === 1 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
              {currentStep === 1 && (
                <div className="text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-void mb-12 tracking-[-0.01em]">
                    What are you looking for?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {propertyTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type.value })}
                        className={`p-6 border-2 transition-all duration-300 hover:border-gilt ${
                          formData.propertyType === type.value
                            ? "border-gilt bg-gilt/5"
                            : "border-void/10 bg-white"
                        }`}
                      >
                        <span className="text-void font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Timeline */}
            <div className={`transition-all duration-500 ${currentStep === 2 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
              {currentStep === 2 && (
                <div className="text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-void mb-12 tracking-[-0.01em]">
                    When are you looking to invest?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                        className={`p-6 border-2 transition-all duration-300 hover:border-gilt ${
                          formData.timeline === timeline.value
                            ? "border-gilt bg-gilt/5"
                            : "border-void/10 bg-white"
                        }`}
                      >
                        <span className="text-void font-medium">{timeline.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Budget */}
            <div className={`transition-all duration-500 ${currentStep === 3 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
              {currentStep === 3 && (
                <div className="text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-void mb-12 tracking-[-0.01em]">
                    What&apos;s your budget range?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {budgets.map((budget) => (
                      <button
                        key={budget.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: budget.value })}
                        className={`p-6 border-2 transition-all duration-300 hover:border-gilt ${
                          formData.budget === budget.value
                            ? "border-gilt bg-gilt/5"
                            : "border-void/10 bg-white"
                        }`}
                      >
                        <span className="text-void font-medium">{budget.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Contact Details */}
            <div className={`transition-all duration-500 ${currentStep === 4 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
              {currentStep === 4 && (
                <div className="text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-void mb-12 tracking-[-0.01em]">
                    Your contact details
                  </h2>
                  <div className="max-w-md mx-auto space-y-6">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-4 border-2 border-void/10 bg-white focus:border-gilt outline-none transition-colors duration-300 text-center"
                        placeholder="Full Name *"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 border-2 border-void/10 bg-white focus:border-gilt outline-none transition-colors duration-300 text-center"
                        placeholder="Email Address *"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-4 border-2 border-void/10 bg-white focus:border-gilt outline-none transition-colors duration-300 text-center"
                        placeholder="Phone Number *"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full p-4 border-2 border-void/10 bg-white focus:border-gilt outline-none transition-colors duration-300 text-center appearance-none cursor-pointer"
                      >
                        <option value="">Country of Residence</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 5: Message */}
            <div className={`transition-all duration-500 ${currentStep === 5 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
              {currentStep === 5 && (
                <div className="text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-void mb-12 tracking-[-0.01em]">
                    Anything else we should know?
                  </h2>
                  <div className="max-w-md mx-auto">
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full p-4 border-2 border-void/10 bg-white focus:border-gilt outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your preferences, specific requirements, or any questions you have..."
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 max-w-2xl mx-auto">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 text-void/60 hover:text-void transition-colors duration-300 ${
                  currentStep === 1 ? "invisible" : ""
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Back
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-8 py-4 transition-all duration-300 ${
                    canProceed()
                      ? "bg-gilt/10 text-void hover:bg-gilt hover:text-void"
                      : "bg-void/5 text-void/30 cursor-not-allowed"
                  }`}
                >
                  Next
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-4 bg-gilt text-void hover:bg-void hover:text-paper transition-all duration-300"
                >
                  Submit
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </button>
              )}
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-24 pt-16 border-t border-void/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <span className="text-label text-stone block mb-3">Phone</span>
                <a href="tel:+971522432567" className="text-void hover:text-gilt transition-colors duration-300">
                  +971 52 243 2567
                </a>
              </div>
              <div>
                <span className="text-label text-stone block mb-3">Email</span>
                <a href="mailto:admin@echelonelite.ae" className="text-void hover:text-gilt transition-colors duration-300">
                  admin@echelonelite.ae
                </a>
              </div>
              <div>
                <span className="text-label text-stone block mb-3">WhatsApp</span>
                <a href="https://wa.me/971522432567" className="text-void hover:text-gilt transition-colors duration-300">
                  +971 52 243 2567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
