import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const BlogGrid = () => {
  const blogPosts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `${['10 Health Benefits of Organic Foods', 'Farm-to-Table: A Complete Guide', 'Seasonal Eating: Spring Vegetables', 'Sustainable Farming Practices', 'Healthy Breakfast Ideas', 'Organic vs Conventional: The Truth'][i % 6]}`,
    excerpt: "Discover the amazing benefits of incorporating organic foods into your daily diet. Learn about nutrition, taste, and environmental impact.",
    author: "Jane Smith",
    date: "2024-01-15",
    readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
    category: ['Health', 'Recipes', 'Farming', 'Lifestyle'][Math.floor(Math.random() * 4)],
    image: "/src/assets/hero-organic-food.jpg"
  }));

  const categories = ['All', 'Health', 'Recipes', 'Farming', 'Lifestyle', 'Nutrition'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Fresh Stories</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover the latest insights about organic living, healthy recipes, and sustainable farming
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-2/3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={category === 'All' ? 'default' : 'outline'}
                    size="sm"
                    className="transition-all hover:scale-105"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg">
              <div className="h-80 bg-gradient-to-br from-primary to-accent"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">Health</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  The Complete Guide to Organic Living
                </h2>
                <p className="text-muted-foreground mb-6">
                  Everything you need to know about transitioning to an organic lifestyle. 
                  From shopping tips to meal planning, we've got you covered.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Dr. Sarah Wilson
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Jan 15, 2024
                    </div>
                  </div>
                  <Button>
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card-elevated hover-lift group">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 rounded-t-2xl mb-4"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
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

          {/* Newsletter */}
          <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-6">
              Get the latest articles and healthy living tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default BlogGrid;