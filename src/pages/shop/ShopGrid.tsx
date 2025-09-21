import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { ProductSkeleton } from "@/components/ProductSkeleton";
import { Filter, Grid, List, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ShopGrid = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const products = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Fresh Product ${i + 1}`,
    price: (Math.random() * 50 + 10).toFixed(2),
    originalPrice: (Math.random() * 70 + 20).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: `/src/assets/hero-organic-food.jpg`,
    category: ['Fruits', 'Vegetables', 'Dairy', 'Meat'][Math.floor(Math.random() * 4)],
    isOrganic: Math.random() > 0.5,
    inStock: Math.random() > 0.1,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground">
              <span>Home</span> / <span className="text-foreground">Shop</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="space-y-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-10" />
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Categories</h3>
                  <div className="space-y-2">
                    {['All Products', 'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Beverages'].map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground hover:text-foreground">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="Min" type="number" />
                      <Input placeholder="Max" type="number" />
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Brands</h3>
                  <div className="space-y-2">
                    {['FreshFarms', 'OrganicPlus', 'GreenChoice', 'NatureBest'].map((brand) => (
                      <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground hover:text-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <div className="flex items-center">
                          {Array.from({ length: rating }).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                          {Array.from({ length: 5 - rating }).map((_, i) => (
                            <span key={i} className="text-muted-foreground">★</span>
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Showing {products.length} products
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Best Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex border border-border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }>
                {products.map((product) => (
                  <div key={product.id} className={
                    viewMode === 'grid'
                      ? "card-product bg-card p-4 group"
                      : "flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all"
                  }>
                    <div className={viewMode === 'grid' ? "relative mb-4" : "w-32 h-32 flex-shrink-0"}>
                      <div className={`${viewMode === 'grid' ? 'w-full h-48' : 'w-full h-full'} bg-muted rounded-lg`}></div>
                      {product.isOrganic && (
                        <div className="absolute top-2 left-2 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
                          Organic
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <span className="text-white font-medium">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 text-sm">
                          {Array.from({ length: Math.floor(Number(product.rating)) }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">${product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        </div>
                        
                        <Button 
                          size="sm" 
                          disabled={!product.inStock}
                          className="transition-all hover:scale-105"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button key={page} variant={page === 1 ? "default" : "outline"} size="sm">
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm">Next</Button>
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

export default ShopGrid;