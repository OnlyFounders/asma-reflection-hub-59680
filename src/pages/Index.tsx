import { useState, useEffect } from "react";
import { DhikrMode } from "@/components/DhikrMode";
import { ProgressBar } from "@/components/ProgressBar";
import { NavigationDots } from "@/components/NavigationDots";
import { DuaGenerator } from "@/components/DuaGenerator";
import { namesOfAllah } from "@/data/names";
import { ChevronLeft, ChevronRight, Heart, ArrowLeft, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(id ? parseInt(id) : 0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDhikrMode, setIsDhikrMode] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const currentName = namesOfAllah[currentIndex];
  const minSwipeDistance = 50;

  // Load favorites and update index from URL
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    if (id) {
      setCurrentIndex(parseInt(id));
    }
  }, [id]);

  // Save progress
  useEffect(() => {
    localStorage.setItem("currentName", currentIndex.toString());
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(`/name/${newIndex}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < namesOfAllah.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(`/name/${newIndex}`);
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
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-40 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
          onClick={() => navigate("/names")}
        >
          <List className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Progress Bar */}
      <ProgressBar current={currentIndex + 1} total={namesOfAllah.length} />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen pt-16 pb-20">
        <div className="flex flex-col items-center justify-start px-4 animate-slide-in overflow-y-auto">
          <div className="w-full max-w-lg space-y-2 text-center">
            {/* Arabic Name Card with Actions */}
            <div className="bg-card rounded-3xl p-6 shadow-sm">
              <div className="flex justify-end gap-2 mb-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-muted transition-all"
                  onClick={handleToggleFavorite}
                >
                  <Heart
                    className={`h-4 w-4 transition-colors ${
                      favorites.includes(currentName.id) ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                </Button>
              </div>
              
              <h1 className="arabic-text text-6xl md:text-7xl font-bold text-primary mb-2">
                {currentName.arabic}
              </h1>
            </div>

            {/* English Meaning & Name */}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {currentName.name}
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                {currentName.meaning}
              </h2>
            </div>

            {/* Explanation */}
            <div className="bg-card rounded-2xl p-4 text-left space-y-1 shadow-sm">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                Explanation
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {currentName.explanation}
              </p>
            </div>

            {/* Invocation/Dhikr Box */}
            <div className="bg-card rounded-2xl p-4 text-left space-y-2 shadow-sm">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                Invocation
              </h3>
              <p className="arabic-text text-xl text-foreground leading-loose text-right">
                {currentName.dhikr.arabic}
              </p>
              <p className="text-xs text-muted-foreground italic">
                {currentName.dhikr.transliteration}
              </p>
              <p className="text-xs text-foreground">
                {currentName.dhikr.translation}
              </p>
            </div>

            {/* DUA Generator - Now integrated below invocation */}
            <DuaGenerator currentName={currentName.name} />

            {/* Start Dhikr Button */}
            <div className="pt-2">
              <Button
                onClick={handleStartDhikr}
                className="h-12 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-medium"
              >
                Start Dhikr
              </Button>
            </div>
          </div>
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