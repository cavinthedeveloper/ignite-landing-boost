import { Header } from "@/components/Header";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home8 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Parallax Hero */}
        <section className="relative h-screen bg-fixed bg-cover bg-center" style={{backgroundImage: 'url("/src/assets/hero-store.jpg")'}}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-6xl font-bold mb-6">Organic Paradise</h1>
              <p className="text-xl mb-8">Discover the finest selection of organic and sustainable products</p>
              <div className="flex gap-4 justify-center">
                <button className="btn-hero">Shop Organic</button>
                <button className="btn-ghost">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 card-elevated">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-4">Choose Products</h3>
                <p className="text-muted-foreground">Select from our premium range of organic products</p>
              </div>
              <div className="text-center p-8 card-elevated">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
                <p className="text-muted-foreground">Get your order delivered within 24 hours</p>
              </div>
              <div className="text-center p-8 card-elevated">
                <div className="w-16 h-16 bg-success rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-4">Enjoy Fresh Food</h3>
                <p className="text-muted-foreground">Experience the freshest and healthiest ingredients</p>
              </div>
            </div>
          </div>
        </section>
        
        <CustomerTestimonials />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home8;