import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: "Oliver Randell — Senior Product Manager",
  description:
    "Senior Product Manager focused on onboarding & growth for startups and product-led SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-black antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}