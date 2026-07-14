import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function PricingPage() {
  return (
    <main className="pt-[71px] lg:pt-[93px]">
      <Navbar />
      <PricingHero />
      <PricingTable />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
