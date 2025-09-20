import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";

export const MobileQuickActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <div className="glass-dark border-t border-white/10 px-2 py-2">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 p-3 touch-target text-white hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-3 touch-target text-white hover:text-primary transition-colors relative">
            <Heart className="w-5 h-5" />
            <span className="text-xs">Wishlist</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">3</span>
            </div>
          </button>
          <button className="flex flex-col items-center gap-1 p-3 touch-target text-white hover:text-primary transition-colors relative">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-bounce-subtle">
              <span className="text-xs font-bold text-white">7</span>
            </div>
          </button>
          <button className="flex flex-col items-center gap-1 p-3 touch-target text-white hover:text-primary transition-colors">
            <User className="w-5 h-5" />
            <span className="text-xs">Account</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-3 touch-target text-white hover:text-primary transition-colors">
            <Menu className="w-5 h-5" />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};