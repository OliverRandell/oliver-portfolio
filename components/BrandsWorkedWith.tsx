const directBrands = [
  "Cancer Council Victoria",
  "BMW Group Australia",
  "MyCareSpace",
  "Sesimi",
];

const platformBrands = ["Toyota", "Volkswagen", "Quest Hotels"];

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

        <div className="space-y-9">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
              Direct project leadership
            </p>
            <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
              {directBrands.map((brand) => (
                <div
                  key={brand}
                  className="grid min-h-28 place-items-center border-b border-r border-border bg-paper px-4 text-center text-sm font-semibold text-ink-muted transition-colors hover:text-accent"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
              Enterprise brands supported through Sesimi
            </p>
            <div className="grid grid-cols-3 border-l border-t border-border">
              {platformBrands.map((brand) => (
                <div
                  key={brand}
                  className="grid min-h-24 place-items-center border-b border-r border-border bg-paper px-3 text-center font-serif text-xl font-medium text-ink-muted transition-colors hover:text-accent"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
