import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title =
  "Technathon | Digital Transformation Partners for Custom Software, AI & Web Development";
const description =
  "Technathon is your digital transformation partner, empowering enterprises with custom software development, applied AI, and web development built to scale.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital transformation partner",
    "custom software development",
    "applied AI development",
    "AI software company",
    "web development company",
    "enterprise software solutions",
    "software engineering firm",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Technathon",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
