import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import OurPurposeSection from "@/components/OurPurposeSection";
import OurValuesSection from "@/components/OurValuesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurPurposeSection />
      <OurValuesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
