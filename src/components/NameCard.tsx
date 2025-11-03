import { Heart, Volume2 } from "lucide-react";
import { NameOfAllah } from "@/data/names";
import { Button } from "@/components/ui/button";

interface NameCardProps {
  name: NameOfAllah;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onStartDhikr: () => void;
}

export const NameCard = ({ name, isFavorite, onToggleFavorite, onStartDhikr }: NameCardProps) => {
  const handlePlayAudio = () => {
    // Use Web Speech API to pronounce the Arabic name
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(name.arabic);
      utterance.lang = 'ar-SA'; // Arabic
      utterance.rate = 0.8; // Slightly slower for clarity
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 pb-16 pt-2 animate-slide-in overflow-y-auto">
      <div className="w-full max-w-lg space-y-2 text-center">
        {/* Arabic Name Card with Actions */}
        <div className="bg-card rounded-3xl p-6 shadow-sm">
          <div className="flex justify-end gap-2 mb-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-muted transition-all"
              onClick={onToggleFavorite}
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isFavorite ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-muted transition-all"
              onClick={handlePlayAudio}
            >
              <Volume2 className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
          
          <h1 className="arabic-text text-6xl md:text-7xl font-bold text-primary mb-2">
            {name.arabic}
          </h1>
        </div>

        {/* English Meaning & Name */}
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            {name.name}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            {name.meaning}
          </h2>
        </div>

        {/* Explanation */}
        <div className="bg-card rounded-2xl p-4 text-left space-y-1 shadow-sm">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
            Explanation
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {name.explanation}
          </p>
        </div>

        {/* Invocation/Dhikr Box */}
        <div className="bg-card rounded-2xl p-4 text-left space-y-2 shadow-sm">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
            Invocation
          </h3>
          <p className="arabic-text text-xl text-foreground leading-loose text-right">
            {name.dhikr.arabic}
          </p>
          <p className="text-xs text-muted-foreground italic">
            {name.dhikr.transliteration}
          </p>
          <p className="text-xs text-foreground">
            {name.dhikr.translation}
          </p>
        </div>

        {/* Start Dhikr Button */}
        <div className="pt-2">
          <Button
            onClick={onStartDhikr}
            className="h-12 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-medium"
          >
            Start Dhikr
          </Button>
        </div>
      </div>
    </div>
  );
};