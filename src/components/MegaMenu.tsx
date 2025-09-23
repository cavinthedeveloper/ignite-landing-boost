import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleMouseEnter = () => {
    // Keep mega menu open when hovering over it
  };
  
  const handleMouseLeave = () => {
    // Small delay to prevent accidental closes
    setTimeout(() => {
      onClose();
    }, 100);
  };

  const categories = [
    {
      name: "Home Pages",
      items: [
        { name: "Home 1 - Fresh Market", href: "/home1" },
        { name: "Home 2 - Organic Store", href: "/home2" },
        { name: "Home 3 - Grocery Hub", href: "/home3" },
        { name: "Home 4 - Health Food", href: "/home4" },
        { name: "Home 5 - Farm Fresh", href: "/home5" },
        { name: "Home 6 - Gourmet", href: "/home6" },
        { name: "Home 7 - Supermarket", href: "/home7" },
        { name: "Home 8 - Local Market", href: "/home8" },
        { name: "Home 9 - Premium", href: "/home9" },
        { name: "Home 10 - Eco Store", href: "/home10" }
      ]
    },
    {
      name: "Shop",
      items: [
        { name: "Shop Grid", href: "/shop/grid" },
        { name: "Shop List", href: "/shop/list" },
        { name: "Fresh Fruits", href: "/shop/category/fruits" },
        { name: "Vegetables", href: "/shop/category/vegetables" },
        { name: "Dairy Products", href: "/shop/category/dairy" },
        { name: "Meat & Poultry", href: "/shop/category/meat" },
        { name: "Bakery", href: "/shop/category/bakery" },
        { name: "Beverages", href: "/shop/category/beverages" }
      ]
    },
    {
      name: "Blog",
      items: [
        { name: "Blog Grid", href: "/blog/grid" },
        { name: "Blog List", href: "/blog/list" },
        { name: "Healthy Recipes", href: "/blog/healthy-recipes" },
        { name: "Nutrition Tips", href: "/blog/nutrition-tips" },
        { name: "Cooking Guides", href: "/blog/cooking-guides" },
        { name: "Seasonal Produce", href: "/blog/seasonal-produce" }
      ]
    },
    {
      name: "Account",
      items: [
        { name: "My Account", href: "/account" },
        { name: "Order History", href: "/account/orders" },
        { name: "Profile Settings", href: "/account/profile" },
        { name: "Address Book", href: "/account/addresses" },
        { name: "Wishlist", href: "/account/wishlist" },
        { name: "Cart", href: "/cart" },
        { name: "Checkout", href: "/checkout" }
      ]
    }
  ];

  return (
    <>
      {/* Desktop Mega Menu */}
      <div 
        className={`
          hidden lg:block absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-elegant
          transition-all duration-300 z-40
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="space-y-4">
                <h3 className="font-bold text-lg text-foreground border-b border-primary/20 pb-2">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-1 text-sm hover:translate-x-1 transform"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Featured Section */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-primary text-white p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h4 className="font-bold text-lg mb-2">Flash Sale</h4>
                <p className="text-sm opacity-90">Up to 50% off on fresh produce</p>
                <Link to="/shop" className="text-sm font-medium underline mt-2 inline-block">
                  Shop Now →
                </Link>
              </div>
              <div className="bg-gradient-accent text-white p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h4 className="font-bold text-lg mb-2">Free Delivery</h4>
                <p className="text-sm opacity-90">On orders above $50</p>
                <Link to="/shop" className="text-sm font-medium underline mt-2 inline-block">
                  Order Now →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary-dark to-primary text-white p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h4 className="font-bold text-lg mb-2">New Arrivals</h4>
                <p className="text-sm opacity-90">Fresh seasonal products</p>
                <Link to="/shop" className="text-sm font-medium underline mt-2 inline-block">
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div className={`
          absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-foreground">Menu</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <span className="sr-only">Close menu</span>
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.name}>
                  <button
                    onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                    className="flex items-center justify-between w-full py-3 text-left font-semibold text-foreground border-b border-border"
                  >
                    {category.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeCategory === category.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`
                    overflow-hidden transition-all duration-300
                    ${activeCategory === category.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <ul className="space-y-2 pt-3 pl-4">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            onClick={onClose}
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2"
                          >
                            <ChevronRight className="w-3 h-3 mr-2" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Featured */}
            <div className="mt-8 space-y-4">
              <div className="bg-gradient-primary text-white p-4 rounded-xl">
                <h4 className="font-bold mb-1">Flash Sale</h4>
                <p className="text-xs opacity-90">Up to 50% off</p>
              </div>
              <div className="bg-gradient-accent text-white p-4 rounded-xl">
                <h4 className="font-bold mb-1">Free Delivery</h4>
                <p className="text-xs opacity-90">Orders $50+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};