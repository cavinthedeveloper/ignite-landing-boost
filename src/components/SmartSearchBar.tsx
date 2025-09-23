import { Search, Mic, Camera, Sparkles } from "lucide-react";
import { useState } from "react";

export const SmartSearchBar = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const trendingSearches = [
    "🥑 Organic Avocados", 
    "🥛 Fresh Milk", 
    "🍞 Artisan Bread", 
    "🥗 Salad Mix"
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for fresh groceries, recipes, or brands..."
          className="w-full pl-12 pr-24 py-3 text-base border-0 rounded-xl bg-white/95 backdrop-blur-sm shadow-elegant focus:shadow-premium focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-2">
          <button 
            onClick={() => setIsListening(!isListening)}
            className={`p-2 rounded-xl transition-all duration-300 touch-target ${
              isListening 
                ? "bg-accent text-white animate-pulse" 
                : "bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent"
            }`}
            aria-label="Voice search"
          >
            <Mic className="h-4 w-4" />
          </button>
          
          <button className="p-2 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 touch-target">
            <Camera className="h-4 w-4" />
          </button>
          
          <button className="p-2 rounded-xl bg-gradient-primary text-white hover:scale-105 transition-all duration-300 touch-target shadow-accent">
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>
      
    </div>
  );
};