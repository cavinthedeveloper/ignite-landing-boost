import { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  originalPrice?: number;
}

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MiniCart = ({ isOpen, onClose }: MiniCartProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Fresh Organic Bananas",
      price: 3.99,
      originalPrice: 5.99,
      quantity: 2,
      image: "/placeholder.svg"
    },
    {
      id: "2", 
      name: "Premium Avocados",
      price: 8.99,
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Organic Spinach Bundle",
      price: 4.49,
      originalPrice: 6.99,
      quantity: 3,
      image: "/placeholder.svg"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
  );

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Mini Cart Panel */}
      <div className={`
        fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 
        transition-transform duration-300 flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-primary text-white">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <div>
              <h2 className="text-lg font-bold">Shopping Cart</h2>
              <p className="text-sm opacity-90">{totalItems} items</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
              <Link 
                to="/shop"
                onClick={onClose}
                className="btn-hero inline-block"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">IMG</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground text-sm leading-tight mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border bg-white p-6 space-y-4">
            {/* Savings */}
            {savings > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-success font-medium">You saved:</span>
                <span className="text-success font-bold">${savings.toFixed(2)}</span>
              </div>
            )}
            
            {/* Subtotal */}
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Subtotal:</span>
              <span className="text-primary">${subtotal.toFixed(2)}</span>
            </div>
            
            {/* Free Shipping */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground">Free shipping on orders $50+</span>
                {subtotal >= 50 ? (
                  <span className="text-success font-medium">✓ Qualified</span>
                ) : (
                  <span className="text-muted-foreground">
                    Add ${(50 - subtotal).toFixed(2)} more
                  </span>
                )}
              </div>
              {subtotal < 50 && (
                <div className="mt-2 bg-muted rounded-full h-1.5">
                  <div 
                    className="bg-gradient-primary h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                  />
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to="/cart"
                onClick={onClose}
                className="w-full bg-muted hover:bg-muted/80 text-foreground font-medium py-3 px-4 rounded-xl transition-colors text-center block"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={onClose}
                className="w-full btn-hero text-center block"
              >
                Checkout Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};