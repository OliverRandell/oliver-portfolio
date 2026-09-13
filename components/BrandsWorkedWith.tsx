const brands = [
  "MyCareSpace",
  "City of Melbourne",
  "Toyota",
  "Volkswagen",
  "Cancer Council Victoria",
  "Loan Market",
  "BMW",
  "Catch.com.au",
  "Kubota",
  "Scenic",
  "The Chocolate Box",
  "Robert Gordon Pottery",
  "Mitsubishi",
  "Audi",
  "Hyundai",
  "Quest Hotels",
];

export default function BrandsWorkedWith() {
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
            From national public-health services and automotive tools to
            enterprise SaaS platforms, I&apos;ve helped teams turn complex
            requirements into products people can confidently use.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group grid min-h-24 place-items-center border-b border-r border-border bg-paper px-4 py-5 text-center transition-colors hover:bg-accent-tint"
            >
              <span className="max-w-32 text-[13px] font-bold leading-tight tracking-[-0.01em] text-ink-muted transition-colors group-hover:text-accent">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
