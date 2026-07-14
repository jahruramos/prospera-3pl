import Navbar from "@/components/Navbar";
import TechnologyHero from "@/components/TechnologyHero";
import TechnologyFeatures from "@/components/TechnologyFeatures";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function TechnologyPage() {
  return (
    <main className="pt-[71px] lg:pt-[93px]">
      <Navbar />
      <TechnologyHero />
      <TechnologyFeatures />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
