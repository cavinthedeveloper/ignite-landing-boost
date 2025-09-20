import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Chef",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9211a23?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    comment: "The quality of ingredients is outstanding! Everything arrives fresh and perfectly packaged. My family loves the organic vegetables.",
    product: "Organic Vegetable Box"
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    comment: "FreshMarket has been a game-changer for our restaurant. Consistent quality, reliable delivery, and competitive prices.",
    product: "Premium Seafood"
  },
  {
    name: "Emma Davis",
    role: "Nutrition Coach",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    comment: "I recommend FreshMarket to all my clients. Their organic selection is impressive and the nutritional information is detailed.",
    product: "Organic Superfoods"
  },
  {
    name: "David Wilson",
    role: "Busy Parent",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    comment: "The convenience is unmatched. Fresh groceries delivered to my door while I'm at work. The kids love the fruit selection!",
    product: "Family Fresh Box"
  }
];

export const CustomerTestimonials = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-8 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-lg mb-8 leading-relaxed text-card-foreground">
                "{testimonial.comment}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            4.9/5 Rating from 50,000+ Reviews
          </div>
          <div>
            <button className="btn-hero">
              Join Our Happy Customers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};