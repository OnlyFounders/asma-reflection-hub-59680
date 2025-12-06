import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { namesOfAllah } from "@/data/names";
import { ArrowLeft, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const NamesList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const filteredNames = namesOfAllah.filter(
    (name) =>
      name.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.arabic.includes(searchQuery) ||
      name.meaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-2xl font-bold text-primary">
              أَسْمَاءُ اللَّهِ الْحُسْنَىٰ
            </h1>
            <p className="text-sm text-muted-foreground">99 Names of Allah</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/favorites")}
            className="rounded-full relative"
          >
            <Heart className="h-5 w-5" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                {favorites.length}
              </span>
            )}
          </Button>
        </div>

        {/* Search */}
        <div className="container mx-auto px-4 pb-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, meaning..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        </div>
      </header>

      {/* Names Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredNames.map((name, index) => (
            <Card
              key={name.id}
              onClick={() => navigate(`/name/${index}`)}
              className="p-6 cursor-pointer hover:shadow-lg hover:scale-105 transition-all space-y-3 bg-card"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-muted-foreground">
                  {name.id}
                </span>
                {favorites.includes(name.id) && (
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                )}
              </div>
              
              <div className="text-center space-y-2">
                <h2 className="arabic-text text-4xl font-bold text-primary">
                  {name.arabic}
                </h2>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {name.name}
                </p>
                <p className="text-base font-semibold text-foreground">
                  {name.meaning}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {filteredNames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No names found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default NamesList;
