import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Ticker from "@/components/Ticker";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Ticker />
        <Partners />
        <Services />
        <Industries />
        <Process />
        <WhyUs />
        <CaseStudies />
        <TechStack />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
