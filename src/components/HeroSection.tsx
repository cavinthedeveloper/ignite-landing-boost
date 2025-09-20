import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import heroOrganic from "@/assets/hero-organic-food.jpg";
import heroCooking from "@/assets/hero-cooking.jpg";
import heroStore from "@/assets/hero-store.jpg";

const slides = [
  {
    image: heroOrganic,
    title: "Premium Organic Foods",
    subtitle: "Farm Fresh Quality",
    description: "Discover the finest organic ingredients sourced directly from sustainable farms. Taste the difference quality makes.",
    cta: "Shop Organic",
    badge: "Best Seller"
  },
  {
    image: heroCooking,
    title: "Delicious Recipes",
    subtitle: "Cook Like a Chef",
    description: "Transform fresh ingredients into culinary masterpieces with our expertly crafted recipes and cooking guides.",
    cta: "Explore Recipes",
    badge: "New"
  },
  {
    image: heroStore,
    title: "Fast Delivery",
    subtitle: "Fresh to Your Door",
    description: "Premium quality ingredients delivered fresh to your doorstep within hours. Convenience meets excellence.",
    cta: "Order Now",
    badge: "Free Shipping"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              {slides[currentSlide].badge}
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero inline-flex items-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                {slides[currentSlide].cta}
              </button>
              <button className="btn-ghost">
                Learn More
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

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};