import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, Clock } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how" },
    { name: "Recipes", href: "#recipes" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" }
  ];

  const customerService = [
    { name: "Contact Support", href: "#support" },
    { name: "FAQ", href: "#faq" },
    { name: "Delivery Info", href: "#delivery" },
    { name: "Returns", href: "#returns" },
    { name: "Track Order", href: "#track" }
  ];

  const categories = [
    { name: "Fresh Fruits", href: "#fruits" },
    { name: "Vegetables", href: "#vegetables" },
    { name: "Dairy Products", href: "#dairy" },
    { name: "Meat & Seafood", href: "#meat" },
    { name: "Organic Products", href: "#organic" }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders over $50"
    },
    {
      icon: Clock,
      title: "2-Hour Delivery",
      description: "Express delivery available"
    },
    {
      icon: Shield,
      title: "Fresh Guarantee",
      description: "100% satisfaction"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "SSL encrypted checkout"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Features Bar */}
      <div className="border-b border-secondary-light/20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <Icon className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">FreshMarket</h2>
                <p className="text-sm opacity-80">Premium Organic</p>
              </div>
            </div>
            
            <p className="mb-6 opacity-90 leading-relaxed max-w-md">
              Your trusted partner for premium organic foods and fresh ingredients. 
              We deliver quality, freshness, and convenience to your doorstep.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>1-800-FRESH-01</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>hello@freshmarket.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Los Angeles, CA 90210</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm opacity-80">Follow Us:</span>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-secondary-light/20 rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-6">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-light/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm opacity-80">
              <p>&copy; 2024 FreshMarket. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#terms" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                <a href="#cookies" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-sm opacity-80 mr-2">We Accept:</span>
              <div className="flex gap-2">
                {["Visa", "MC", "PayPal", "Apple Pay"].map((method) => (
                  <div 
                    key={method}
                    className="w-10 h-6 bg-white rounded text-xs flex items-center justify-center text-gray-800 font-medium"
                  >
                    {method === "MC" ? "MC" : method.slice(0, 4)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};