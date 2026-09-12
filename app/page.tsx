import Hero from "@/components/Hero";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import BrandsWorkedWith from "@/components/BrandsWorkedWith";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCaseStudies />
      <BrandsWorkedWith />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
