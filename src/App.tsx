import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Home Pages
import Home1 from "./pages/homes/Home1";
import Home2 from "./pages/homes/Home2";
import Home3 from "./pages/homes/Home3";
import Home4 from "./pages/homes/Home4";
import Home5 from "./pages/homes/Home5";
import Home6 from "./pages/homes/Home6";
import Home7 from "./pages/homes/Home7";
import Home8 from "./pages/homes/Home8";
import Home9 from "./pages/homes/Home9";
import Home10 from "./pages/homes/Home10";

// Shop Pages
import ShopGrid from "./pages/shop/ShopGrid";
import ShopList from "./pages/shop/ShopList";
import ShopCategory from "./pages/shop/ShopCategory";
import ProductDetails from "./pages/shop/ProductDetails";

// Blog Pages
import BlogGrid from "./pages/blog/BlogGrid";
import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";

// Ecommerce Pages
import Cart from "./pages/ecommerce/Cart";
import Checkout from "./pages/ecommerce/Checkout";
import Account from "./pages/account/Account";
import Orders from "./pages/account/Orders";
import Profile from "./pages/account/Profile";
import Addresses from "./pages/account/Addresses";
import Wishlist from "./pages/account/Wishlist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Home */}
          <Route path="/" element={<Index />} />
          
          {/* Alternative Home Pages */}
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home4" element={<Home4 />} />
          <Route path="/home5" element={<Home5 />} />
          <Route path="/home6" element={<Home6 />} />
          <Route path="/home7" element={<Home7 />} />
          <Route path="/home8" element={<Home8 />} />
          <Route path="/home9" element={<Home9 />} />
          <Route path="/home10" element={<Home10 />} />
          
          {/* Shop Pages */}
          <Route path="/shop" element={<ShopGrid />} />
          <Route path="/shop/grid" element={<ShopGrid />} />
          <Route path="/shop/list" element={<ShopList />} />
          <Route path="/shop/category/:category" element={<ShopCategory />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogGrid />} />
          <Route path="/blog/grid" element={<BlogGrid />} />
          <Route path="/blog/list" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          
          {/* Ecommerce Pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Account Pages */}
          <Route path="/account" element={<Account />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/addresses" element={<Addresses />} />
          <Route path="/account/wishlist" element={<Wishlist />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
