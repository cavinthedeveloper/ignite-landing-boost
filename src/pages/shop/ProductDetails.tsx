import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Share2, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: id,
    name: "Premium Organic Avocados",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    category: "Fruits",
    brand: "FreshFarms",
    description: "Hand-picked premium Hass avocados, sourced directly from certified organic farms. Rich, creamy texture perfect for guacamole, toast, or healthy snacking.",
    images: [
      "/src/assets/hero-organic-food.jpg",
      "/src/assets/hero-cooking.jpg",
      "/src/assets/hero-store.jpg"
    ],
    specifications: {
      "Weight": "500g (4-5 pieces)",
      "Origin": "California, USA",
      "Organic": "USDA Certified",
      "Shelf Life": "5-7 days",
      "Storage": "Room temperature until ripe"
    },
    nutritionalInfo: {
      "Calories": "160 per 100g",
      "Fat": "15g",
      "Carbs": "9g",
      "Fiber": "7g",
      "Protein": "2g"
    }
  };

  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: i + 100,
    name: `Related Product ${i + 1}`,
    price: (Math.random() * 30 + 10).toFixed(2),
    image: "/src/assets/hero-organic-food.jpg"
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground">
              <span>Home</span> / <span>Shop</span> / <span>{product.category}</span> / 
              <span className="text-foreground"> {product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20"></div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                  onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : product.images.length - 1)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={() => setSelectedImage(prev => prev < product.images.length - 1 ? prev + 1 : 0)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`aspect-square bg-muted rounded-lg border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{product.brand}</Badge>
                  <Badge className="bg-success text-success-foreground">Organic</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  <Badge className="bg-destructive text-destructive-foreground">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center border border-border rounded-lg">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setQuantity(prev => prev + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1" size="lg">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </Button>
                    <Button variant="outline" size="lg">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Free Delivery</div>
                      <div className="text-xs text-muted-foreground">Orders over $50</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Quality Guarantee</div>
                      <div className="text-xs text-muted-foreground">100% satisfaction</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Easy Returns</div>
                      <div className="text-xs text-muted-foreground">30-day policy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description} Our avocados are carefully selected for optimal ripeness and 
                    transported in climate-controlled environments to maintain their quality. Each avocado 
                    is individually inspected to ensure you receive only the best quality produce.
                  </p>
                  <h4 className="text-lg font-medium mt-6 mb-3">Why Choose Our Avocados?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• USDA Certified Organic</li>
                    <li>• Hand-picked at peak ripeness</li>
                    <li>• Sustainably grown</li>
                    <li>• Rich in healthy fats and nutrients</li>
                    <li>• Perfect for healthy lifestyle</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="font-medium">{key}:</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
                    <div className="space-y-3">
                      {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="font-medium">{key}:</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-medium">Customer {i + 1}</div>
                            <div className="flex text-yellow-400 text-sm">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star key={j} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-muted-foreground">
                          Great quality avocados! Perfect ripeness and taste. Will definitely order again.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="card-product bg-card p-4 group">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default ProductDetails;