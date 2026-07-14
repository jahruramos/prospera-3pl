import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
