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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
    </div>
  );
};

export default Index;
