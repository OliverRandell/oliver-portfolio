"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { name: "MyCareSpace", logoSrc: "/images/brands/mycarespace.svg", description: "Led delivery of a new platform designed to make provider matching and account management more scalable." },
  { name: "City of Melbourne", logoSrc: "/images/brands/city-of-melbourne.svg", description: "Contributed to digital product work for one of Australia’s largest local government organisations." },
  { name: "Toyota", logoSrc: "/images/brands/toyota.svg", description: "Supported Toyota’s teams through Sesimi’s enterprise brand-management platform and a large-scale client migration." },
  { name: "Volkswagen", logoSrc: "/images/brands/volkswagen.svg", description: "Supported Volkswagen through Sesimi, helping enterprise users manage and produce brand-compliant marketing content." },
  { name: "Cancer Council Victoria", logoSrc: "/images/brands/cancer-council-victoria.png", description: "Led delivery of Quit’s National Cessation Platform from solution design through launch." },
  { name: "Loan Market", logoSrc: "/images/brands/loan-market.svg", description: "Leading delivery of a major digital platform replatforming programme across a complex stakeholder environment." },
  { name: "BMW", logoSrc: "/images/brands/bmw.svg", description: "Leading delivery of a dealer-facing product supporting vehicle specifications, pricing and sales conversations across Australia and New Zealand." },
  { name: "Catch.com.au", logoSrc: "/images/brands/catch.svg", description: "Worked within a large-scale Australian ecommerce environment, connecting customer experience and technical delivery." },
  { name: "Kubota", logoSrc: "/images/brands/kubota.svg", description: "Supported Kubota through Sesimi’s enterprise platform, helping teams create and manage brand-compliant marketing assets." },
  { name: "Scenic", logoSrc: "/images/brands/scenic.svg", description: "Led the rebuild of Sesimi’s SaaS platform while supporting Scenic and other enterprise clients through migration and onboarding." },
  { name: "The Chocolate Box", logoSrc: "/images/brands/the-chocolate-box.png", logoClassName: "brightness-0", description: "Supported The Chocolate Box through Sesimi’s tools for producing consistent, on-brand marketing content." },
  { name: "Robert Gordon Pottery", logoSrc: "/images/brands/robert-gordon-pottery.png", description: "Supported Robert Gordon Pottery through Sesimi’s tools for creating and managing brand assets at scale." },
  { name: "Mitsubishi", logoSrc: "/images/brands/mitsubishi.svg", description: "Supported Mitsubishi through Sesimi’s enterprise platform and its brand-compliant content workflows." },
  { name: "Audi", logoSrc: "/images/brands/audi.svg", description: "Supported Audi through Sesimi’s enterprise platform and its brand-compliant content workflows." },
  { name: "Hyundai", logoSrc: "/images/brands/hyundai.svg", description: "Supported Hyundai through Sesimi’s enterprise platform and its brand-compliant content workflows." },
  { name: "Quest Hotels", logoSrc: "/images/brands/quest-hotels.svg", description: "Supported Quest Hotels through Sesimi’s tools for producing consistent local marketing content at scale." },
];

function BrandDetail({ brand }: { brand: (typeof brands)[number] }) {
  return (
    <div className="border-l-2 border-accent pl-5" aria-live="polite">
      <p className="text-[10px] font-bold uppercase tracking-[1px] text-accent">
        {brand.name}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {brand.description}
      </p>
    </div>
  );
}

export default function BrandsWorkedWith() {
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-(--container-content) gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Selected clients and products
          </p>
          <h2 className="mt-4 max-w-md font-serif text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl">
            Brands I&apos;ve worked with
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            From public-interest platforms to automotive and enterprise SaaS,
            I&apos;ve helped teams find clarity, align delivery and make useful
            digital products.
          </p>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-[1px] text-ink-faint">
            Hover, focus or tap a brand to explore
          </p>
          <div className="mt-8 hidden lg:block">
            <BrandDetail brand={activeBrand} />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
            {brands.map((brand) => {
              const isActive = activeBrand.name === brand.name;

              return (
                <button
                  key={brand.name}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveBrand(brand)}
                  onFocus={() => setActiveBrand(brand)}
                  onClick={() => setActiveBrand(brand)}
                  className={`group grid min-h-24 place-items-center border-b border-r border-border px-4 py-5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent ${
                    isActive ? "bg-accent-tint" : "bg-paper hover:bg-accent-tint"
                  }`}
                >
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    width={160}
                    height={64}
                    sizes="(min-width: 640px) 10rem, 40vw"
                    className={`h-12 w-full max-w-36 object-contain opacity-65 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0 ${
                      isActive ? "opacity-100 grayscale-0" : ""
                    } ${brand.logoClassName ?? ""}`}
                  />
                </button>
              );
            })}
          </div>
          <div className="mt-6 lg:hidden">
            <BrandDetail brand={activeBrand} />
          </div>
        </div>
      </div>
    </section>
  );
}
