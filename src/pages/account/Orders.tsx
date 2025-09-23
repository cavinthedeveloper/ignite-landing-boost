import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Download, Eye, Truck, CheckCircle } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "PNS-10000095",
      date: "26 Aug 2025 20:35",
      status: "Processing",
      paymentStatus: "Completed",
      total: "£103.90",
      deliveryAddress: "59 Roxeth Green Avenue",
      items: [
        { name: "Organic Avocados", image: "/placeholder.svg", qty: 2 },
        { name: "Fresh Salmon", image: "/placeholder.svg", qty: 1 },
        { name: "Artisan Bread", image: "/placeholder.svg", qty: 1 },
        { name: "Local Honey", image: "/placeholder.svg", qty: 1 },
        { name: "Free-Range Eggs", image: "/placeholder.svg", qty: 1 }
      ]
    },
    {
      id: "PNS-10000094",
      date: "20 Aug 2025 18:32",
      status: "Delivered",
      paymentStatus: "Completed",
      total: "£78.98",
      deliveryAddress: "59 Roxeth Green Avenue",
      items: [
        { name: "Organic Spinach", image: "/placeholder.svg", qty: 2 },
        { name: "Wild Blueberries", image: "/placeholder.svg", qty: 1 },
        { name: "Greek Yogurt", image: "/placeholder.svg", qty: 3 }
      ]
    },
    {
      id: "PNS-10000093", 
      date: "15 Aug 2025 14:22",
      status: "Delivered",
      paymentStatus: "Completed", 
      total: "£45.50",
      deliveryAddress: "59 Roxeth Green Avenue",
      items: [
        { name: "Organic Tomatoes", image: "/placeholder.svg", qty: 1 },
        { name: "Fresh Basil", image: "/placeholder.svg", qty: 1 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processing": return "bg-blue-100 text-blue-800";
      case "Shipped": return "bg-yellow-100 text-yellow-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing": return <Package className="w-4 h-4" />;
      case "Shipped": return <Truck className="w-4 h-4" />;
      case "Delivered": return <CheckCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold">My Orders</h1>
              <p className="text-muted-foreground">Track and manage your order history</p>
            </div>
          </div>

          {/* Order Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="default" size="sm">Active</Button>
            <Button variant="outline" size="sm">Past</Button>
            <Button variant="outline" size="sm">Cancelled</Button>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="card-elevated p-6">
                {/* Order Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      {getStatusIcon(order.status)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Order #{order.id}</h3>
                      <p className="text-muted-foreground text-sm">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      {order.paymentStatus}
                    </Badge>
                  </div>
                </div>

                {/* Order Items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                  {order.items.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-muted rounded-lg mb-2 flex items-center justify-center">
                        <Package className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium truncate w-full">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.qty}</p>
                    </div>
                  ))}
                  {order.items.length > 5 && (
                    <div className="flex items-center justify-center text-muted-foreground">
                      <span className="text-sm">+{order.items.length - 5} more</span>
                    </div>
                  )}
                </div>

                {/* Order Details */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Fulfillment</p>
                    <p className="font-semibold">{order.status}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Payment</p>
                    <p className="font-semibold text-green-600">{order.paymentStatus}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Total</p>
                    <p className="font-bold text-lg">{order.total}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Delivery</p>
                    <p className="font-semibold text-sm">{order.deliveryAddress}</p>
                  </div>
                </div>

                {/* Order Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </Button>
                  {order.status === "Delivered" && (
                    <Button variant="outline" size="sm">
                      Reorder Items
                    </Button>
                  )}
                  {order.status === "Processing" && (
                    <Button variant="outline" size="sm">
                      Track Order
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline">Load More Orders</Button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Orders;