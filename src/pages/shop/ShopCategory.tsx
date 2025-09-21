import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import ShopGrid from "./ShopGrid";

const ShopCategory = () => {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Category Header */}
        <div className="bg-gradient-primary py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 capitalize">{category}</h1>
            <p className="text-xl opacity-90">Discover our premium {category} collection</p>
          </div>
        </div>
        
        {/* Category content - reuse shop grid logic */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Fresh {category}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked {category} sourced directly from organic farms. 
              Quality guaranteed with same-day delivery.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default ShopCategory;