import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Senior Product Manager based in Melbourne. Fifteen years moving between engineering, UX and product leadership — turning complex problems into products people actually use.";

export const metadata: Metadata = {
  metadataBase: new URL("https://oliverrandell.com"),
  title: {
    default: "Oliver Randell — Senior Product Manager",
    template: "%s — Oliver Randell",
  },
  description: siteDescription,
  keywords: [
    "Oliver Randell",
    "Senior Product Manager",
    "Product Manager Melbourne",
    "Product Strategy",
    "UX",
  ],
  openGraph: {
    title: "Oliver Randell — Senior Product Manager",
    description: siteDescription,
    url: "https://oliverrandell.com",
    siteName: "Oliver Randell",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Oliver Randell — Senior Product Manager",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
