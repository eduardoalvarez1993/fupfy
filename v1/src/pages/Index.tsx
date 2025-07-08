import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BeforeAfter />
      <Benefits />
      <Pricing />
      <Testimonial />
      <Clients />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;