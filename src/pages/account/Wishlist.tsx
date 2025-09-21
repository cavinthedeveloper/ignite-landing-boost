import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
          <p className="text-muted-foreground">Your saved items will appear here.</p>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Wishlist;