import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home7 = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div key={item} className="card-product bg-card p-6">
                <div className="w-full h-48 bg-muted rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Featured Product {item}</h3>
                <p className="text-muted-foreground text-sm mb-4">Fresh and organic</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">$12.99</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition-colors">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <WhyChooseUs />
        <NewsletterSignup />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home7;