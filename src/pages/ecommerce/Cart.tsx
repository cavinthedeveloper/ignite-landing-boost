import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, X, ShoppingBag, ArrowRight, Tag } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Organic Avocados",
      price: 12.99,
      quantity: 2,
      image: "/src/assets/hero-organic-food.jpg",
      inStock: true
    },
    {
      id: 2,
      name: "Fresh Organic Spinach",
      price: 8.99,
      quantity: 1,
      image: "/src/assets/hero-organic-food.jpg",
      inStock: true
    },
    {
      id: 3,
      name: "Organic Free-Range Eggs",
      price: 6.99,
      quantity: 3,
      image: "/src/assets/hero-organic-food.jpg",
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const discount = promoCode === "FRESH50" ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground">
              <span>Home</span> / <span className="text-foreground">Shopping Cart</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some fresh products to get started!</p>
              <Button size="lg">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-3xl font-bold">Shopping Cart</h1>
                  <span className="text-muted-foreground">{cartItems.length} items</span>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-6 bg-card rounded-2xl border border-border">
                      <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        {!item.inStock && (
                          <p className="text-destructive text-sm mb-2">Out of stock</p>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-primary">${item.price}</span>
                            <div className="flex items-center border border-border rounded-lg">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={!item.inStock}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="px-4 py-2 min-w-12 text-center">{item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={!item.inStock}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <span className="text-lg font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8">
                  <Button variant="outline" size="lg">
                    Continue Shopping
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    
                    {/* Promo Code */}
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input 
                            placeholder="Promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <Button variant="outline">Apply</Button>
                      </div>
                      {promoCode === "FRESH50" && (
                        <p className="text-sm text-success mt-2">✓ 10% discount applied!</p>
                      )}
                    </div>

                    {/* Order Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-success">
                          <span>Discount:</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="h-px bg-border"></div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {shipping > 0 && (
                      <div className="mb-6 p-4 bg-accent/10 rounded-lg">
                        <p className="text-sm text-accent">
                          💡 Add ${(50 - subtotal).toFixed(2)} more to get FREE shipping!
                        </p>
                      </div>
                    )}

                    <Button size="lg" className="w-full">
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    {/* Security Features */}
                    <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-success rounded-full"></div>
                        <span>Secure checkout with SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-success rounded-full"></div>
                        <span>Free returns within 30 days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-success rounded-full"></div>
                        <span>24/7 customer support</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Products */}
                  <div className="mt-8 bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-semibold mb-4">You might also like</h3>
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Recommended Product {i + 1}</h4>
                            <p className="text-primary font-bold">${(Math.random() * 20 + 5).toFixed(2)}</p>
                          </div>
                          <Button size="sm" variant="outline">Add</Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Cart;