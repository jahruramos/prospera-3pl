import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function ServicesPage() {
  return (
    <main className="pt-[71px] lg:pt-[93px]">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
