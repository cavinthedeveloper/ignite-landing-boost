import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { User, Package, MapPin, Heart, Settings, LogOut } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-elevated p-6 hover-lift">
              <User className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profile</h3>
              <p className="text-muted-foreground mb-4">Manage your personal information</p>
              <Button>View Profile</Button>
            </div>
            <div className="card-elevated p-6 hover-lift">
              <Package className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Orders</h3>
              <p className="text-muted-foreground mb-4">Track your orders and history</p>
              <Button>View Orders</Button>
            </div>
            <div className="card-elevated p-6 hover-lift">
              <MapPin className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-2">Addresses</h3>
              <p className="text-muted-foreground mb-4">Manage shipping addresses</p>
              <Button>Manage Addresses</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Account;