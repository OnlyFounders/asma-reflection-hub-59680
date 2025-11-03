import { useState, useEffect } from "react";
import { NameOfAllah, namesOfAllah } from "@/data/names";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const favoriteNames = namesOfAllah.filter(name => favorites.includes(name.id));

  const handleRemoveFavorite = (id: number) => {
    const newFavorites = favorites.filter(fId => fId !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleNameClick = (index: number) => {
    navigate(`/?name=${index}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Favorites</h1>
            <p className="text-sm text-muted-foreground">{favoriteNames.length} saved names</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {favoriteNames.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No favorites yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Tap the heart icon on any name to save it here
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {favoriteNames.map((name, idx) => (
              <div
                key={name.id}
                className="bg-card rounded-2xl p-4 shadow-sm border border-border cursor-pointer hover:border-primary/30 transition-colors"
                onClick={() => handleNameClick(name.id - 1)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="arabic-text text-3xl font-bold text-primary mb-1">
                      {name.arabic}
                    </h2>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {name.name}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      {name.meaning}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFavorite(name.id);
                    }}
                  >
                    <Heart className="h-4 w-4 fill-primary text-primary" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
