import { Header } from "@/components/Header";
import { TopCategories } from "@/components/TopCategories";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home6 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Video Hero */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-primary opacity-60 z-20"></div>
          <div className="relative z-30 h-full flex items-center justify-center text-white text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-7xl font-bold mb-6 animate-fade-in-up">Farm to Table</h1>
              <p className="text-2xl mb-8 animate-fade-in-up">Experience the freshest ingredients from local farms</p>
              <button className="btn-hero animate-fade-in-up">Explore Products</button>
            </div>
          </div>
        </section>
        <TopCategories />
        <ProductGrid />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home6;