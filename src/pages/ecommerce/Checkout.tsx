import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Truck, Shield, Check, ChevronRight } from "lucide-react";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const cartItems = [
    { id: 1, name: "Premium Organic Avocados", price: 12.99, quantity: 2 },
    { id: 2, name: "Fresh Organic Spinach", price: 8.99, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { id: 1, name: "Shipping", completed: currentStep > 1 },
    { id: 2, name: "Payment", completed: currentStep > 2 },
    { id: 3, name: "Review", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Progress Steps */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                    step.completed 
                      ? 'bg-success border-success text-white' 
                      : step.id === currentStep 
                        ? 'bg-primary border-primary text-white' 
                        : 'bg-background border-muted-foreground text-muted-foreground'
                  }`}>
                    {step.completed ? <Check className="w-5 h-5" /> : step.id}
                  </div>
                  <span className={`ml-3 font-medium ${
                    step.id === currentStep ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.name}
                  </span>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 mx-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <div className="space-y-8">
                  <h1 className="text-3xl font-bold">Shipping Information</h1>
                  
                  {/* Contact Information */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123 Main Street" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="New York" />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ny">New York</SelectItem>
                              <SelectItem value="ca">California</SelectItem>
                              <SelectItem value="tx">Texas</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" placeholder="10001" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Delivery Options</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="delivery" value="standard" defaultChecked />
                          <div>
                            <div className="font-medium">Standard Delivery</div>
                            <div className="text-sm text-muted-foreground">5-7 business days</div>
                          </div>
                        </div>
                        <Badge className="bg-success text-success-foreground">FREE</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="delivery" value="express" />
                          <div>
                            <div className="font-medium">Express Delivery</div>
                            <div className="text-sm text-muted-foreground">2-3 business days</div>
                          </div>
                        </div>
                        <span className="font-medium">$9.99</span>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="delivery" value="overnight" />
                          <div>
                            <div className="font-medium">Overnight Delivery</div>
                            <div className="text-sm text-muted-foreground">Next business day</div>
                          </div>
                        </div>
                        <span className="font-medium">$19.99</span>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" onClick={() => setCurrentStep(2)} className="w-full">
                    Continue to Payment
                  </Button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  <h1 className="text-3xl font-bold">Payment Information</h1>
                  
                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card" className="mt-6">
                      <div className="bg-card rounded-2xl border border-border p-6">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <div className="relative">
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="John Doe" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paypal" className="mt-6">
                      <div className="bg-card rounded-2xl border border-border p-6 text-center">
                        <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold">PP</span>
                        </div>
                        <h3 className="font-semibold mb-2">Pay with PayPal</h3>
                        <p className="text-muted-foreground mb-6">You'll be redirected to PayPal to complete your payment</p>
                        <Button className="w-full">Continue with PayPal</Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="apple" className="mt-6">
                      <div className="bg-card rounded-2xl border border-border p-6 text-center">
                        <div className="w-16 h-16 bg-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-background font-bold">🍎</span>
                        </div>
                        <h3 className="font-semibold mb-2">Pay with Apple Pay</h3>
                        <p className="text-muted-foreground mb-6">Use Touch ID or Face ID to pay securely</p>
                        <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                          Pay with Apple Pay
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Billing Address */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">Billing Address</h2>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Same as shipping address</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" onClick={() => setCurrentStep(1)} className="flex-1">
                      Back to Shipping
                    </Button>
                    <Button size="lg" onClick={() => setCurrentStep(3)} className="flex-1">
                      Review Order
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <h1 className="text-3xl font-bold">Review Your Order</h1>
                  
                  {/* Order Summary */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Order Items</h2>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 bg-muted rounded-lg"></div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                          </div>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping & Payment Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-2xl border border-border p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Truck className="w-5 h-5" />
                        Shipping Information
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>John Doe</p>
                        <p>123 Main Street</p>
                        <p>New York, NY 10001</p>
                        <p>Standard Delivery (5-7 days)</p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-2xl border border-border p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Payment Method
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        <p>**** **** **** 3456</p>
                        <p>Expires 12/25</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" onClick={() => setCurrentStep(2)} className="flex-1">
                      Back to Payment
                    </Button>
                    <Button size="lg" className="flex-1">
                      Complete Order
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded-lg"></div>
                          <div>
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span className="text-success">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-success" />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-success" />
                      <span>Free shipping on orders over $50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Checkout;