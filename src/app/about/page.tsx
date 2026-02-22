import Container from "@/components/container";
export default function Page() {
  return <Container className="py-12">
    <div className="space-y-6">
      <div className="text-xs font-medium tracking-[0.16em] text-black/50">
        ABOUT
      </div>
      <h1 className="text-4xl font-medium tracking-tight">About me</h1>
      <p className="max-w-prose text-base leading-relaxed text-black/70">
        Placeholder. This page will include a short narrative plus values and a
        few highlights relevant to startups and product-led SaaS.
      </p>
    </div>
  </Container>;
}