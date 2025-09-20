import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin, Zap, Gift } from "lucide-react";
import { SmartSearchBar } from "./SmartSearchBar";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Categories", href: "#categories" },
    { name: "Products", href: "#products" },
    { name: "Recipes", href: "#recipes" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Top promotional banner */}
      <div className="bg-gradient-primary text-white py-2 text-center text-sm relative overflow-hidden">
        <div className="relative z-10">
          <Zap className="inline w-4 h-4 mr-2" />
          Flash Sale: Free delivery on orders $50+ | Use code: FRESH50
          <Gift className="inline w-4 h-4 ml-2" />
        </div>
        <div className="absolute inset-0 bg-gradient-shine opacity-30 animate-[slide_3s_linear_infinite]"></div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-white/95 backdrop-blur-md border-b border-border shadow-elegant"
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          {/* Main header */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-accent">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-foreground">FreshMarket</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Categories</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Recipes</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search - Mobile */}
              <button className="lg:hidden p-2 text-foreground hover:text-primary transition-colors touch-target">
                <Search className="w-6 h-6" />
              </button>

              {/* Wishlist */}
              <button className="relative p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-target">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white rounded-full text-xs flex items-center justify-center animate-bounce-subtle">
                  3
                </span>
              </button>

              {/* Cart */}
              <button className="relative p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-target">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center animate-pulse">
                  7
                </span>
              </button>

              {/* User */}
              <button className="p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-target">
                <User className="w-6 h-6" />
              </button>

              {/* Mobile Menu */}
              <button className="lg:hidden p-2 text-foreground hover:text-primary transition-colors touch-target">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Bar - Full width on desktop */}
          <div className="hidden lg:block pb-4">
            <SmartSearchBar />
          </div>
        </div>
      </header>
    </>
  );
};