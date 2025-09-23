import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  User, Package, MapPin, Heart, Settings, LogOut, 
  ShoppingBag, Star, Gift, CreditCard, MessageCircle,
  TrendingUp, Bell, Shield
} from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Header */}
          <div className="bg-gradient-primary text-white rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold mb-1">Welcome, John Doe</h1>
                  <p className="text-white/90">Quick Actions to manage your account.</p>
                </div>
              </div>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Need Help?
              </Button>
            </div>
          </div>

          {/* Account Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card-elevated p-4 text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </div>
            <div className="card-elevated p-4 text-center">
              <Heart className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">24</div>
              <div className="text-sm text-muted-foreground">Wishlist Items</div>
            </div>
            <div className="card-elevated p-4 text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">4.8</div>
              <div className="text-sm text-muted-foreground">Review Rating</div>
            </div>
            <div className="card-elevated p-4 text-center">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">$1,240</div>
              <div className="text-sm text-muted-foreground">Total Saved</div>
            </div>
          </div>

          {/* Main Account Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/account/orders" className="card-elevated p-6 hover-lift group">
              <Package className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">My Orders</h3>
              <p className="text-muted-foreground mb-4">View all your past and current orders in one place.</p>
              <Button className="w-full">View Orders</Button>
            </Link>

            <Link to="/account/profile" className="card-elevated p-6 hover-lift group">
              <User className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Profile Settings</h3>
              <p className="text-muted-foreground mb-4">Edit your personal info and manage account preferences.</p>
              <Button className="w-full">Manage Profile</Button>
            </Link>

            <Link to="/account/addresses" className="card-elevated p-6 hover-lift group">
              <MapPin className="w-12 h-12 text-success mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">My Addresses</h3>
              <p className="text-muted-foreground mb-4">Manage your saved shipping and billing addresses.</p>
              <Button className="w-full">Manage Addresses</Button>
            </Link>

            <Link to="/account/wishlist" className="card-elevated p-6 hover-lift group">
              <Heart className="w-12 h-12 text-destructive mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">My Wishlist</h3>
              <p className="text-muted-foreground mb-4">See or manage the product review you've submitted.</p>
              <Button className="w-full">View Wishlist</Button>
            </Link>

            <div className="card-elevated p-6 hover-lift group">
              <Gift className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Gift Cards & Vouchers</h3>
              <p className="text-muted-foreground mb-4">Manage your gift cards, check balances, and redeem vouchers easily.</p>
              <Button className="w-full">Manage Gift Cards</Button>
            </div>

            <div className="card-elevated p-6 hover-lift group">
              <CreditCard className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Payment Methods</h3>
              <p className="text-muted-foreground mb-4">Manage your saved payment cards and methods securely.</p>
              <Button className="w-full">Payment Methods</Button>
            </div>

            <div className="card-elevated p-6 hover-lift group">
              <Star className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">My Reviews</h3>
              <p className="text-muted-foreground mb-4">Check the status of your return requests and history.</p>
              <Button className="w-full">My Reviews</Button>
            </div>

            <div className="card-elevated p-6 hover-lift group">
              <ShoppingBag className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">My Returns</h3>
              <p className="text-muted-foreground mb-4">Control how we contact you — email, SMS, or phone.</p>
              <Button className="w-full">My Returns</Button>
            </div>

            <div className="card-elevated p-6 hover-lift group">
              <MessageCircle className="w-12 h-12 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Contact Preferences</h3>
              <p className="text-muted-foreground mb-4">Connect your social profiles for faster logins and personalized access.</p>
              <Button className="w-full">Contact Preferences</Button>
            </div>
          </div>

          {/* Sign Out Section */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-white">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Account;