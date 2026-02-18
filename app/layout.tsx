import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Occupational Medicine Practice | Workforce Resilience Platform",
  description:
    "A modern workforce resilience platform built for Nigerian organizations, addressing employee burnout, financial stress, mental health, and healthcare accessibility.",
  keywords: [
    "employee wellbeing",
    "mental health",
    "workforce resilience",
    "Nigeria",
    "occupational health",
    "employee assistance",
  ],
  authors: [{ name: "Occupational Medicine Practice" }],
  openGraph: {
    title: "Occupational Medicine Practice | Workforce Resilience Platform",
    description:
      "Protecting employee wellbeing, mental health, and financial wellness for Nigerian organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
