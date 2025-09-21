import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TopCategories } from "@/components/TopCategories";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 to-accent-light/10">
      <Header />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <div className="bg-background/50 backdrop-blur-sm">
          <TopCategories />
          <ProductGrid />
        </div>
        <WhyChooseUs />
        <CustomerTestimonials />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home2;