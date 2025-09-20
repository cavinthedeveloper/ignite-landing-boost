import { useState, useEffect } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { ProductGridSkeleton } from "./ProductSkeleton";

// Mock product data - in real app, this would come from an API
const generateProducts = () => {
  const names = [
    "Organic Avocados", "Fresh Salmon", "Artisan Bread", "Local Honey", "Free-Range Eggs",
    "Organic Spinach", "Wild Blueberries", "Aged Cheese", "Premium Olive Oil", "Fresh Basil",
    "Organic Tomatoes", "Grass-Fed Beef", "Quinoa Grains", "Coconut Milk", "Dark Chocolate",
    "Fresh Lemons", "Organic Carrots", "Almond Butter", "Greek Yogurt", "Heirloom Apples"
  ];
  
  const categories = ["Fruits", "Vegetables", "Dairy", "Meat", "Pantry", "Bakery"];
  
  return Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    name: names[index] || `Product ${index + 1}`,
    category: categories[index % categories.length],
    price: (Math.random() * 20 + 5).toFixed(2),
    originalPrice: (Math.random() * 30 + 15).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500 + 50),
    image: `https://picsum.photos/400/300?random=${index + 1}`,
    badge: index % 4 === 0 ? "New" : index % 4 === 1 ? "Sale" : index % 4 === 2 ? "Organic" : null,
    inStock: Math.random() > 0.1
  }));
};

export const ProductGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(generateProducts());
      setLoading(false);
    }, 1500);
  }, []);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked premium ingredients for your culinary adventures
            </p>
          </div>
          <ProductGridSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked premium ingredients for your culinary adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card-product group relative animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "New" ? "bg-success text-success-foreground" :
                    product.badge === "Sale" ? "bg-destructive text-destructive-foreground" :
                    "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    favorites.has(product.id) 
                      ? "bg-destructive text-destructive-foreground" 
                      : "bg-white/80 text-gray-600 hover:bg-destructive hover:text-destructive-foreground"
                  }`}
                  aria-label="Add to favorites"
                >
                  <Heart className={`w-4 h-4 ${favorites.has(product.id) ? "fill-current" : ""}`} />
                </button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-hero text-sm px-6 py-2">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <button 
                    className="btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {product.inStock ? "Add" : "Sold Out"}
                  </button>
                </div>

                {!product.inStock && (
                  <div className="mt-3 text-sm text-destructive font-medium">
                    Out of Stock
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-ghost">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};