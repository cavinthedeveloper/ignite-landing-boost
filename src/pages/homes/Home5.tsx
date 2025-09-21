import { Header } from "@/components/Header";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { CreativeFAQ } from "@/components/CreativeFAQ";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Home5 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Split Hero */}
        <section className="min-h-screen flex">
          <div className="w-1/2 bg-gradient-primary flex items-center justify-center text-white p-12">
            <div className="max-w-lg">
              <h1 className="text-6xl font-bold mb-6">Fresh Market</h1>
              <p className="text-xl mb-8">Premium organic produce delivered fresh to your door</p>
              <button className="btn-ghost">Start Shopping</button>
            </div>
          </div>
          <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: 'url("/src/assets/hero-organic-food.jpg")'}}></div>
        </section>
        <CustomerTestimonials />
        <CreativeFAQ />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Home5;