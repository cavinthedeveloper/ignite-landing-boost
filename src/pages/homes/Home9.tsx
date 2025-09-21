import { Header } from "@/components/Header";
import { RecipesSection } from "@/components/RecipesSection";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home9 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-light/5 to-primary-light/5">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Magazine Style Hero */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  The Future of <span className="text-primary">Grocery</span> Shopping
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Experience next-generation grocery shopping with AI-powered recommendations, 
                  sustainable packaging, and farm-fresh delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-hero">Start Shopping</button>
                  <button className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-primary rounded-3xl"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent rounded-full opacity-80"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-success rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </section>
        
        <RecipesSection />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home9;