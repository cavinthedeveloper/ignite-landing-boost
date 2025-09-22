import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import heroFreshMarket from "@/assets/hero-fresh-market.jpg";
import heroShopping from "@/assets/hero-shopping.jpg";
import heroHealthyCooking from "@/assets/hero-healthy-cooking.jpg";
import heroOrganic from "@/assets/hero-organic-food.jpg";
import heroCooking from "@/assets/hero-cooking.jpg";
import heroStore from "@/assets/hero-store.jpg";

const slides = [
  {
    image: heroFreshMarket,
    title: "Fresh & Organic",
    subtitle: "Farm to Table Excellence",
    description: "Premium quality organic produce delivered fresh to your doorstep. Experience the taste of nature's finest.",
    cta: "Shop Fresh Now",
    badge: "🌿 100% Organic",
    offer: "50% OFF First Order"
  },
  {
    image: heroShopping,
    title: "Premium Shopping",
    subtitle: "Luxury Experience", 
    description: "Discover our premium selection of fresh produce in a world-class shopping environment",
    cta: "Explore Premium",
    badge: "⭐ Premium Quality",
    offer: "Free Delivery $50+"
  },
  {
    image: heroHealthyCooking,
    title: "Healthy Living",
    subtitle: "Cook with Passion",
    description: "Transform your kitchen into a gourmet paradise with our fresh, locally-sourced ingredients",
    cta: "Start Cooking",
    badge: "👨‍🍳 Chef Approved",
    offer: "Recipe Book FREE"
  },
  {
    image: heroCooking,
    title: "Gourmet Recipes", 
    subtitle: "Master Chef Collection",
    description: "Unlock professional cooking secrets with our curated selection of premium ingredients",
    cta: "Explore Recipes",
    badge: "🏆 Award Winning",
    offer: "Cooking Class FREE"
  },
  {
    image: heroStore,
    title: "Express Delivery",
    subtitle: "Lightning Fast",
    description: "Get your groceries delivered within 30 minutes. Fresh, fast, and completely reliable.",
    cta: "Order Express",
    badge: "⚡ 30-Min Delivery",
    offer: "Same Day Guarantee"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeUsers, setActiveUsers] = useState(1247);
  const [dailyDeals, setDailyDeals] = useState(85);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Simulate real-time activity
  useEffect(() => {
    const userInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    const dealInterval = setInterval(() => {
      setDailyDeals(prev => Math.max(0, prev - 1));
    }, 45000);

    return () => {
      clearInterval(userInterval);
      clearInterval(dealInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Real-time activity indicators */}
      <div className="absolute top-4 right-4 z-30 space-y-2">
        <div className="glass px-4 py-2 rounded-full text-white text-sm animate-pulse-slow">
          <span className="text-primary-glow">●</span> {activeUsers} shopping now
        </div>
        <div className="glass px-4 py-2 rounded-full text-white text-sm animate-bounce-subtle">
          🔥 {dailyDeals} deals left today
        </div>
      </div>

      {/* Background Images with enhanced effects */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-full text-sm font-bold mb-4 animate-bounce-subtle shadow-accent border border-white/20">
              🔥 {slides[currentSlide].offer}
            </div>

            {/* Quality Badge */}
            <div className="inline-flex items-center gap-2 glass text-white px-6 py-3 rounded-full text-sm font-medium mb-6 hover-glow">
              <Star className="w-4 h-4 fill-current text-accent" />
              {slides[currentSlide].badge}
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            </div>

            {/* Main Content */}
            <h2 className="text-accent text-xl font-semibold mb-4 tracking-wide">
              {slides[currentSlide].subtitle}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero inline-flex items-center gap-3 touch-target group">
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {slides[currentSlide].cta}
                <span className="ml-2 opacity-75">→</span>
              </button>
              <button className="btn-ghost inline-flex items-center gap-2 touch-target">
                <span>Learn More</span>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Quick actions for mobile */}
            <div className="flex items-center gap-4 mt-6 sm:hidden">
              <button className="glass px-4 py-2 rounded-xl text-white text-sm touch-target">
                🎁 Daily Deals
              </button>
              <button className="glass px-4 py-2 rounded-xl text-white text-sm touch-target">
                📱 App Download
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 text-white">
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-gray-300">Fresh Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2H</div>
                <div className="text-sm text-gray-300">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass text-white p-3 rounded-full hover:scale-110 transition-all duration-300 touch-target hover-glow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass text-white p-3 rounded-full hover:scale-110 transition-all duration-300 touch-target hover-glow"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Enhanced Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all duration-500 touch-target ${
              index === currentSlide 
                ? "bg-white w-8 shadow-glow" 
                : "bg-white/50 w-2 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Social proof floating element */}
      <div className="absolute bottom-20 left-8 z-20 glass px-4 py-3 rounded-2xl text-white animate-float hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">4.9</span>
          </div>
          <div>
            <div className="font-semibold text-sm">50,000+ Reviews</div>
            <div className="text-xs opacity-80">⭐⭐⭐⭐⭐ Trusted by customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};