import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin, Zap, Gift, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SmartSearchBar } from "./SmartSearchBar";
import { MegaMenu } from "./MegaMenu";
import { MiniCart } from "./MiniCart";
import { MobileQuickActions } from "./MobileQuickActions";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "Shop", href: "/shop", hasDropdown: true },
    { name: "Categories", href: "/categories", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: true },
    { name: "Pages", href: "/pages", hasDropdown: true }
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
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-accent">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-foreground">FreshMarket</span>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center gap-8"
              onMouseLeave={() => {
                // Delay close to allow moving to mega menu
                setTimeout(() => {
                  setIsMegaMenuOpen(false);
                  setHoveredMenu(null);
                }, 150);
              }}
            >
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      setIsMegaMenuOpen(true);
                      setHoveredMenu(item.name);
                    }
                  }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search - Mobile */}
              <button 
                onClick={() => setIsMobileSearchOpen(true)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors touch-target"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Wishlist */}
              <Link
                to="/account/wishlist"
                className="relative p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-target"
              >
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white rounded-full text-xs flex items-center justify-center animate-bounce-subtle">
                  3
                </span>
              </Link>

              {/* Cart */}
              <button 
                onClick={() => setIsMiniCartOpen(true)}
                className="relative p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-target"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center animate-pulse">
                  7
                </span>
              </button>

              {/* User */}
              <Link
                to="/account"
                className="p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-target"
              >
                <User className="w-6 h-6" />
              </Link>

              {/* Mobile Menu */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors touch-target"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Bar - Centered on desktop */}
          <div className="hidden lg:flex justify-center items-center pb-3 pt-2">
            <div className="w-full max-w-xl">
              <SmartSearchBar />
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu 
          isOpen={isMegaMenuOpen || isMobileMenuOpen} 
          onClose={() => {
            setIsMegaMenuOpen(false);
            setIsMobileMenuOpen(false);
            setHoveredMenu(null);
          }} 
        />
      </header>

      {/* Mobile Search Overlay */}
      <div className={`
        lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300
        ${isMobileSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div className={`
          absolute top-0 left-0 right-0 bg-white p-4 transition-transform duration-300
          ${isMobileSearchOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <SmartSearchBar />
            </div>
            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mini Cart */}
      <MiniCart 
        isOpen={isMiniCartOpen} 
        onClose={() => setIsMiniCartOpen(false)} 
      />

      {/* Mobile Quick Actions */}
      <MobileQuickActions 
        onMenuClick={() => setIsMobileMenuOpen(true)}
        onSearchClick={() => setIsMobileSearchOpen(true)}
        onCartClick={() => setIsMiniCartOpen(true)}
      />
    </>
  );
};