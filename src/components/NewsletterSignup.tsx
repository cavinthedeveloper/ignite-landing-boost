import { useState } from "react";
import { Mail, Gift, TrendingUp, Clock } from "lucide-react";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, this would send the email to your backend
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-20 section-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-white">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome to FreshMarket!</h2>
            <p className="text-xl mb-6">
              Thank you for subscribing! Check your email for a special welcome offer.
            </p>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="btn-hero"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 section-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay Fresh with Our Newsletter
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Get exclusive recipes, early access to new products, and special discounts delivered to your inbox
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <TrendingUp className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">Exclusive Deals</h3>
              <p className="opacity-80">Get 20% off your first order and access to subscriber-only promotions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">Early Access</h3>
              <p className="opacity-80">Be the first to know about new arrivals and seasonal specialties</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Gift className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">Weekly Recipes</h3>
              <p className="opacity-80">Fresh recipe ideas featuring our seasonal ingredients</p>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-sm opacity-80 mt-4">
                Join 50,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </form>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-80">
            <div>📧 50K+ Subscribers</div>
            <div>⭐ 4.9/5 Rating</div>
            <div>🎁 Weekly Exclusive Offers</div>
          </div>
        </div>
      </div>
    </section>
  );
};