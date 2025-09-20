import { useState } from "react";
import { Plus, Minus, HelpCircle, Package, Truck, Shield, Clock, CreditCard, Leaf } from "lucide-react";

const faqCategories = [
  {
    name: "Orders & Delivery",
    icon: Truck,
    color: "text-primary bg-primary/10",
    faqs: [
      {
        question: "How fast is your delivery?",
        answer: "We offer 2-hour express delivery for orders within city limits and same-day delivery for suburban areas. Standard delivery takes 24-48 hours."
      },
      {
        question: "What's your minimum order amount?",
        answer: "Our minimum order is $25. Orders over $50 qualify for free delivery within our standard delivery zones."
      },
      {
        question: "Can I schedule delivery for a specific time?",
        answer: "Yes! You can schedule delivery up to 7 days in advance and choose from available time slots during checkout."
      }
    ]
  },
  {
    name: "Product Quality",
    icon: Shield,
    color: "text-success bg-success/10",
    faqs: [
      {
        question: "How do you ensure freshness?",
        answer: "We work directly with farms and suppliers, maintaining cold chain logistics. Products are harvested and delivered within 24-48 hours."
      },
      {
        question: "What if I'm not satisfied with my order?",
        answer: "We offer a 100% satisfaction guarantee. If you're not happy with any item, contact us within 24 hours for a full refund or replacement."
      },
      {
        question: "Are your organic products certified?",
        answer: "Yes, all our organic products are certified by recognized organic certification bodies. Certifications are displayed on product pages."
      }
    ]
  },
  {
    name: "Payment & Returns",
    icon: CreditCard,
    color: "text-accent bg-accent/10",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and offer buy-now-pay-later options through Klarna."
      },
      {
        question: "How do returns work?",
        answer: "For fresh products, report issues within 24 hours. For packaged goods, returns are accepted within 7 days in original packaging."
      },
      {
        question: "Do you offer subscription discounts?",
        answer: "Yes! Subscribe to regular deliveries and save 15% on your orders, plus get priority delivery slots and exclusive member prices."
      }
    ]
  },
  {
    name: "Sustainability",
    icon: Leaf,
    color: "text-secondary bg-secondary/10",
    faqs: [
      {
        question: "How eco-friendly is your packaging?",
        answer: "We use 100% recyclable and biodegradable packaging. Insulated bags are reusable, and we offer a return program for packaging materials."
      },
      {
        question: "Are your delivery vehicles electric?",
        answer: "50% of our fleet is electric or hybrid, with a goal to reach 100% clean energy delivery by 2025. We also offset carbon emissions."
      },
      {
        question: "Do you support local farmers?",
        answer: "Absolutely! 70% of our produce comes from local farms within 100 miles, supporting the local economy and reducing transportation impact."
      }
    ]
  }
];

export const CreativeFAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-5 h-5" />
            Got Questions? We've Got Answers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about shopping with FreshMarket
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(index);
                    setOpenFAQ(null);
                  }}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 border-2 ${
                    activeCategory === index
                      ? `${category.color} border-current shadow-lg scale-105`
                      : "bg-card text-muted-foreground border-border hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === index ? "" : "text-muted-foreground"
                  }`} />
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </button>
              );
            })}
          </div>

          {/* FAQ Content */}
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                {(() => {
                  const Icon = faqCategories[activeCategory].icon;
                  return <Icon className={`w-8 h-8 ${faqCategories[activeCategory].color.split(' ')[0]}`} />;
                })()}
                <h3 className="text-2xl font-bold">
                  {faqCategories[activeCategory].name}
                </h3>
              </div>

              <div className="space-y-4">
                {faqCategories[activeCategory].faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-semibold text-lg pr-4">{faq.question}</span>
                      {openFAQ === index ? (
                        <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? Our customer support team is here to help 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Contact Support
              </button>
              <button className="btn-ghost">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};