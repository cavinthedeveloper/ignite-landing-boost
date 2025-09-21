import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight, Search } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams();

  const article = {
    id: 1,
    title: "The Complete Guide to Organic Living: Transform Your Health and Environment",
    content: `
      <p>Living an organic lifestyle is more than just a trend—it's a commitment to your health, the environment, and future generations. In this comprehensive guide, we'll explore everything you need to know about transitioning to organic living.</p>

      <h2>What Does Organic Really Mean?</h2>
      <p>Organic farming and food production involves practices that cycle resources, promote ecological balance, and conserve biodiversity. Organic foods are produced without the use of synthetic pesticides, herbicides, fertilizers, or genetically modified organisms (GMOs).</p>

      <h2>Health Benefits of Organic Foods</h2>
      <p>Research consistently shows that organic foods offer numerous health advantages:</p>
      <ul>
        <li>Higher levels of antioxidants and essential nutrients</li>
        <li>No harmful pesticide residues</li>
        <li>Better taste and freshness</li>
        <li>Reduced exposure to antibiotic-resistant bacteria</li>
      </ul>

      <h2>Getting Started with Organic Living</h2>
      <p>Transitioning to organic living doesn't have to be overwhelming. Start with these simple steps:</p>
      <ol>
        <li>Begin with the "Dirty Dozen" - prioritize organic versions of fruits and vegetables with the highest pesticide residues</li>
        <li>Choose organic dairy and meat products to avoid hormones and antibiotics</li>
        <li>Read labels carefully and look for certified organic seals</li>
        <li>Start growing your own organic herbs and vegetables</li>
      </ol>

      <h2>The Environmental Impact</h2>
      <p>Choosing organic isn't just about personal health—it's about planetary health too. Organic farming practices help:</p>
      <ul>
        <li>Reduce pollution and protect water quality</li>
        <li>Preserve soil fertility and prevent erosion</li>
        <li>Support biodiversity and wildlife habitats</li>
        <li>Combat climate change through carbon sequestration</li>
      </ul>

      <h2>Budget-Friendly Organic Shopping Tips</h2>
      <p>Organic living doesn't have to break the bank. Here are some money-saving strategies:</p>
      <ul>
        <li>Buy seasonal produce when it's abundant and cheaper</li>
        <li>Shop at local farmers' markets for better prices</li>
        <li>Buy in bulk for non-perishable organic items</li>
        <li>Join a Community Supported Agriculture (CSA) program</li>
        <li>Grow your own organic produce</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Embracing organic living is a journey that benefits both you and the planet. Start small, make gradual changes, and remember that every organic choice you make is a step toward a healthier, more sustainable future.</p>
    `,
    author: "Dr. Sarah Wilson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Health",
    tags: ["Organic", "Health", "Lifestyle", "Environment", "Nutrition"],
    image: "/src/assets/hero-organic-food.jpg"
  };

  const relatedArticles = [
    { id: 2, title: "10 Health Benefits of Organic Foods", category: "Health" },
    { id: 3, title: "Seasonal Eating: Spring Vegetables Guide", category: "Recipes" },
    { id: 4, title: "Sustainable Farming Practices", category: "Farming" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground">
              <span>Home</span> / <span>Blog</span> / <span className="text-foreground">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <section className="bg-gradient-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white mb-4">{article.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-3">
              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 rounded-2xl mb-8"></div>

              {/* Social Share */}
              <div className="flex items-center justify-between mb-8 p-4 bg-muted/30 rounded-lg">
                <span className="font-medium">Share this article:</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="space-y-6 text-muted-foreground leading-relaxed"
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted/30 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{article.author}</h4>
                    <p className="text-muted-foreground mb-3">
                      Dr. Sarah Wilson is a certified nutritionist and organic living expert with over 15 years 
                      of experience helping people transition to healthier lifestyles through organic foods and 
                      sustainable practices.
                    </p>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Comments (3)</h3>
                <div className="space-y-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="p-4 bg-card rounded-lg border border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-accent rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">User {i + 1}</span>
                            <span className="text-sm text-muted-foreground">2 days ago</span>
                          </div>
                          <p className="text-muted-foreground">
                            Great article! I've been trying to transition to organic living and this guide 
                            is exactly what I needed. Thank you for the practical tips.
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-8 p-6 bg-muted/30 rounded-2xl">
                  <h4 className="font-semibold mb-4">Leave a Comment</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="px-4 py-2 border border-border rounded-lg bg-background"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="px-4 py-2 border border-border rounded-lg bg-background"
                      />
                    </div>
                    <textarea 
                      placeholder="Your Comment..." 
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    ></textarea>
                    <Button>
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-semibold mb-4">Search Articles</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full px-4 py-2 pr-10 border border-border rounded-lg bg-background"
                    />
                    <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {['Health', 'Recipes', 'Farming', 'Lifestyle', 'Nutrition'].map((category) => (
                      <a 
                        key={category}
                        href="#" 
                        className="block p-2 text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-lg transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Related Articles */}
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <div key={article.id} className="group cursor-pointer">
                        <div className="flex gap-3">
                          <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0"></div>
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                              {article.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">{article.category}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="p-6 bg-gradient-primary rounded-2xl text-white">
                  <h3 className="font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest articles delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default BlogDetails;