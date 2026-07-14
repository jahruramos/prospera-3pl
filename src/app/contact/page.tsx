import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  return (
    <main className="pt-[71px] lg:pt-[93px]">
      <Navbar />
      <ContactHero />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
