import { X, RotateCcw } from "lucide-react";
import { useState } from "react";
import { NameOfAllah } from "@/data/names";
import { Button } from "@/components/ui/button";

interface DhikrModeProps {
  name: NameOfAllah;
  onClose: () => void;
}

export const DhikrMode = ({ name, onClose }: DhikrModeProps) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    // Add haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-6 animate-fade-in">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 h-10 w-10 rounded-full hover:bg-muted"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </Button>

      {/* Content */}
      <div className="w-full max-w-md space-y-12 text-center">
        {/* Arabic Name */}
        <div>
          <h1 className="arabic-text text-7xl md:text-8xl font-bold text-primary">
            {name.arabic}
          </h1>
          <p className="text-lg text-muted-foreground mt-4">{name.meaning}</p>
        </div>

        {/* Counter */}
        <div className="space-y-6">
          <div className="text-7xl md:text-8xl font-bold text-foreground transition-all duration-200">
            {count}
          </div>

          {/* Multiple of 33 indicator */}
          {count > 0 && count % 33 === 0 && (
            <div className="text-primary font-medium animate-pulse">
              ✨ {count / 33}× SubhanAllah
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-card"
            onClick={handleReset}
          >
            <RotateCcw className="h-6 w-6" />
          </Button>

          <button
            onClick={handleIncrement}
            className="h-32 w-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            +
          </button>
        </div>

        {/* Helpful Text */}
        <p className="text-sm text-muted-foreground">
          Tap the button to count • 33, 99, or as many as you wish
        </p>
      </div>
    </div>
  );
};