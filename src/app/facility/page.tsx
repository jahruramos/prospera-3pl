import Navbar from "@/components/Navbar";
import FacilityHero from "@/components/FacilityHero";
import FacilityFeatures from "@/components/FacilityFeatures";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function FacilityPage() {
  return (
    <main>
      <Navbar />
      <FacilityHero />
      <FacilityFeatures />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
