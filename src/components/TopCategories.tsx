import { Apple, Wheat, Milk, Fish, ChefHat, Leaf } from "lucide-react";

const categories = [
  {
    name: "Fresh Fruits",
    icon: Apple,
    count: "200+ items",
    color: "bg-green-100 text-green-600",
    gradient: "from-green-400 to-green-600"
  },
  {
    name: "Organic Grains",
    icon: Wheat,
    count: "150+ items", 
    color: "bg-yellow-100 text-yellow-600",
    gradient: "from-yellow-400 to-yellow-600"
  },
  {
    name: "Dairy Products",
    icon: Milk,
    count: "80+ items",
    color: "bg-blue-100 text-blue-600", 
    gradient: "from-blue-400 to-blue-600"
  },
  {
    name: "Fresh Seafood",
    icon: Fish,
    count: "120+ items",
    color: "bg-cyan-100 text-cyan-600",
    gradient: "from-cyan-400 to-cyan-600"
  },
  {
    name: "Ready Meals",
    icon: ChefHat,
    count: "90+ items",
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    name: "Organic Herbs",
    icon: Leaf,
    count: "50+ items",
    color: "bg-emerald-100 text-emerald-600",
    gradient: "from-emerald-400 to-emerald-600"
  }
];

export const TopCategories = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Shop by <span className="text-primary">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium organic products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group relative bg-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-soft hover:shadow-medium animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};