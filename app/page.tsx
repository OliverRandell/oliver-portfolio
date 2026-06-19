import Hero from "@/components/Hero";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
