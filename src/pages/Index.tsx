import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TopCategories } from "@/components/TopCategories";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { RecipesSection } from "@/components/RecipesSection";
import { CreativeFAQ } from "@/components/CreativeFAQ";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <TopCategories />
        <ProductGrid />
        <WhyChooseUs />
        <CustomerTestimonials />
        <RecipesSection />
        <CreativeFAQ />
        <NewsletterSignup />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Index;
