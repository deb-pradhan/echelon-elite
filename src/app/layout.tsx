import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Echelon Elite | Premium Dubai Real Estate for Investors & Golden Visa Buyers",
  description: "Ultra-premium real estate brokerage specializing in luxury property sales and Golden Visa investments in Dubai. Expert guidance for high-net-worth investors.",
  keywords: "Dubai real estate, Golden Visa, luxury property, Dubai investment, premium apartments, Dubai villas, Emaar, Damac, Palm Jumeirah",
  openGraph: {
    title: "Echelon Elite | Premium Dubai Real Estate",
    description: "Ultra-premium real estate brokerage specializing in luxury property sales and Golden Visa investments in Dubai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
