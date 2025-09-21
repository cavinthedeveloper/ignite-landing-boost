import { Header } from "@/components/Header";
import { TopCategories } from "@/components/TopCategories";
import { ProductGrid } from "@/components/ProductGrid";
import { RecipesSection } from "@/components/RecipesSection";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home3 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Minimal Hero */}
        <section className="bg-gradient-primary py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Fresh & Simple</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Quality groceries delivered to your door</p>
            <button className="btn-hero">Shop Now</button>
          </div>
        </section>
        <TopCategories />
        <ProductGrid />
        <RecipesSection />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home3;