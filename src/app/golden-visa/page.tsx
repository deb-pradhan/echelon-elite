import { Metadata } from "next";
import { GoldenVisaHero } from "./components/GoldenVisaHero";
import { GoldenVisaOverview } from "./components/GoldenVisaOverview";
import { GoldenVisaProcess } from "./components/GoldenVisaProcess";
import { GoldenVisaFAQ } from "./components/GoldenVisaFAQ";
import { GoldenVisaCTA } from "./components/GoldenVisaCTA";

export const metadata: Metadata = {
  title: "Dubai Golden Visa | 10-Year UAE Residency Through Property Investment | Echelon Elite",
  description: "Complete guide to Dubai Golden Visa through property investment. Learn eligibility, minimum investment requirements, step-by-step process, and timeline. Expert support from Echelon Elite.",
  keywords: "Dubai Golden Visa, UAE residency, property investment visa, 10-year visa Dubai, Golden Visa eligibility, AED 2 million investment",
};

export default function GoldenVisaPage() {
  return (
    <>
      <GoldenVisaHero />
      <GoldenVisaOverview />
      <GoldenVisaProcess />
      <GoldenVisaFAQ />
      <GoldenVisaCTA />
    </>
  );
}


