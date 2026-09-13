import type { Metadata } from "next";
import { Montserrat, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import ContactRail from "@/components/ContactRail";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`${newsreader.variable} ${montserrat.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <Header />
        <ContactRail />
        {children}
      </body>
    </html>
  );
}
