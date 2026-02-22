import type { Metadata } from "next";
import { Source_Code_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oliver Randell",
  description: "Senior Product Manager focused on onboarding & growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white text-neutral-900 antialiased">
        <SiteHeader />
          <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}