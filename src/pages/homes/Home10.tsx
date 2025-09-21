import { Header } from "@/components/Header";
import { TopCategories } from "@/components/TopCategories";
import { CreativeFAQ } from "@/components/CreativeFAQ";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home10 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Full-screen Grid Hero */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gradient-primary flex items-center justify-center p-12">
            <div className="max-w-lg text-white">
              <h1 className="text-5xl font-bold mb-6">Premium Organic Store</h1>
              <p className="text-lg mb-8 opacity-90">
                Curated selection of the finest organic products from sustainable farms worldwide.
              </p>
              <button className="btn-ghost">Explore Collection</button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-accent/20 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
            <div className="bg-success/20 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
            </div>
            <div className="bg-primary/20 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
            </div>
            <div className="bg-destructive/20 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-destructive mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
        
        <TopCategories />
        <CreativeFAQ />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home10;