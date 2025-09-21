import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home4 = () => {
  return (
    <div className="min-h-screen dark">
      <Header />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <ProductGrid />
        <WhyChooseUs />
        <NewsletterSignup />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home4;