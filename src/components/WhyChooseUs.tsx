import { Truck, Shield, Clock, Award, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Fast Delivery",
    description: "Free delivery on orders over $50. Get your fresh ingredients delivered within 2 hours.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% fresh guarantee or your money back. We stand behind every product we sell.",
    color: "text-success"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you with any questions or concerns.",
    color: "text-accent"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-picked products from trusted suppliers. Only the finest makes it to your table.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "50K+ Happy Customers",
    description: "Join thousands of satisfied customers who trust us for their daily fresh needs.",
    color: "text-primary"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable packaging and carbon-neutral delivery. Good for you and the planet.",
    color: "text-success"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">FreshMarket?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering exceptional quality, service, and value in everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-muted mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};