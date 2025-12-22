import { Hero } from "@/components/sections/Hero";
import { WhyEchelon } from "@/components/sections/WhyEchelon";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { GoldenVisaCTA } from "@/components/sections/GoldenVisaCTA";
import { Communities } from "@/components/sections/Communities";
import { InvestorServices } from "@/components/sections/InvestorServices";
import { Trust } from "@/components/sections/Trust";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      {/* Hero - Premium Dubai Real Estate for Investors & Golden Visa Buyers */}
      <Hero />

      {/* Why Echelon Elite - 3-point premium value */}
      <WhyEchelon />

      {/* Luxury Property Highlights */}
      <FeaturedProperties />

      {/* Golden Visa Eligibility CTA */}
      <GoldenVisaCTA />

      {/* Browse By Community */}
      <Communities />

      {/* Investor Services */}
      <InvestorServices />

      {/* Client Trust Elements (Awards, group company details) */}
      <Trust />

      {/* Concierge Support / Contact CTA */}
      <ContactCTA />
    </>
  );
}
