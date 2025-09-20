import { Clock, Users, ChefHat, TrendingUp } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Mediterranean Quinoa Bowl",
    category: "Healthy",
    cookTime: "25 min",
    serves: "4",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    description: "A colorful and nutritious bowl packed with fresh vegetables, quinoa, and Mediterranean flavors.",
    ingredients: ["Quinoa", "Cherry Tomatoes", "Cucumber", "Feta Cheese", "Olive Oil"],
    trending: true
  },
  {
    id: 2,
    title: "Grilled Salmon with Herbs",
    category: "Protein",
    cookTime: "20 min",
    serves: "2",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
    description: "Perfectly grilled salmon with fresh herbs and a side of roasted vegetables.",
    ingredients: ["Fresh Salmon", "Dill", "Lemon", "Asparagus", "Garlic"],
    trending: false
  },
  {
    id: 3,
    title: "Seasonal Vegetable Stir-Fry",
    category: "Vegetarian",
    cookTime: "15 min",
    serves: "3",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    description: "Quick and delicious stir-fry featuring the season's best organic vegetables.",
    ingredients: ["Bell Peppers", "Broccoli", "Carrots", "Ginger", "Soy Sauce"],
    trending: true
  },
  {
    id: 4,
    title: "Artisan Bread & Cheese Platter",
    category: "Appetizer",
    cookTime: "10 min",
    serves: "6",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop",
    description: "An elegant platter featuring our selection of artisan breads and premium cheeses.",
    ingredients: ["Sourdough Bread", "Aged Cheddar", "Goat Cheese", "Honey", "Walnuts"],
    trending: false
  }
];

export const RecipesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Fresh <span className="text-primary">Recipe Ideas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your fresh ingredients into culinary masterpieces with our chef-curated recipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="group card-product overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {recipe.category}
                  </span>
                  {recipe.trending && (
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Difficulty */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    recipe.difficulty === "Easy" ? "bg-success/80 text-success-foreground" :
                    recipe.difficulty === "Medium" ? "bg-accent/80 text-accent-foreground" :
                    "bg-destructive/80 text-destructive-foreground"
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-hero text-sm px-6 py-2">
                    View Recipe
                  </button>
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {recipe.description}
                </p>

                {/* Recipe Stats */}
                <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recipe.cookTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Serves {recipe.serves}
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="w-4 h-4" />
                    {recipe.difficulty}
                  </div>
                </div>

                {/* Ingredients Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 3).map((ingredient) => (
                      <span
                        key={ingredient}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        +{recipe.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button className="btn-secondary w-full">
                  Get Ingredients & Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Recipes CTA */}
        <div className="text-center mt-12">
          <button className="btn-ghost">
            View All Recipes
          </button>
        </div>
      </div>
    </section>
  );
};