import { useState, useEffect } from "react";
import { NameCard } from "@/components/NameCard";
import { DhikrMode } from "@/components/DhikrMode";
import { ProgressBar } from "@/components/ProgressBar";
import { NavigationDots } from "@/components/NavigationDots";
import { DuaGenerator } from "@/components/DuaGenerator";
import { namesOfAllah } from "@/data/names";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams] = useSearchParams();
  const nameParam = searchParams.get("name");
  const [currentIndex, setCurrentIndex] = useState(nameParam ? parseInt(nameParam) : 0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDhikrMode, setIsDhikrMode] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const currentName = namesOfAllah[currentIndex];
  const minSwipeDistance = 50;

  // Load favorites and progress from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    const savedProgress = localStorage.getItem("currentName");
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    if (savedProgress) {
      setCurrentIndex(parseInt(savedProgress));
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem("currentName", currentIndex.toString());
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < namesOfAllah.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleToggleFavorite = () => {
    const nameId = currentName.id;
    const newFavorites = favorites.includes(nameId)
      ? favorites.filter(id => id !== nameId)
      : [...favorites, nameId];
    
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    
    toast({
      title: favorites.includes(nameId) ? "Removed from favorites" : "Added to favorites",
      description: currentName.name,
    });
  };

  const handleStartDhikr = () => {
    setIsDhikrMode(true);
  };

  const handleCloseDhikr = () => {
    setIsDhikrMode(false);
  };

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isDhikrMode) return;
      
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isDhikrMode]);

  if (isDhikrMode) {
    return <DhikrMode name={currentName} onClose={handleCloseDhikr} />;
  }

  return (
    <div
      className="min-h-screen bg-background relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >

      {/* Progress Bar */}
      <ProgressBar current={currentIndex + 1} total={namesOfAllah.length} />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen pt-16 pb-20">
        <div className="container mx-auto px-4 space-y-8">
          <NameCard
            name={currentName}
            isFavorite={favorites.includes(currentName.id)}
            onToggleFavorite={handleToggleFavorite}
            onStartDhikr={handleStartDhikr}
          />
          
          <DuaGenerator currentName={currentName.name} />
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 disabled:opacity-30"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 disabled:opacity-30"
          onClick={handleNext}
          disabled={currentIndex === namesOfAllah.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Navigation Dots */}
      <NavigationDots
        current={currentIndex}
        total={namesOfAllah.length}
        onNavigate={setCurrentIndex}
      />

      {/* Favorites Quick Access */}
      {favorites.length > 0 && (
        <div className="fixed top-20 right-6 z-40">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => navigate("/favorites")}
          >
            <Heart className="h-5 w-5 fill-primary text-primary" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
              {favorites.length}
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;