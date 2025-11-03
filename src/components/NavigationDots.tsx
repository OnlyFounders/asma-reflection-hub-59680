interface NavigationDotsProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

export const NavigationDots = ({ current, total, onNavigate }: NavigationDotsProps) => {
  // Show dots for nearby names (current -2 to current +2)
  const visibleDots = [];
  const range = 2;
  
  for (let i = Math.max(0, current - range); i <= Math.min(total - 1, current + range); i++) {
    visibleDots.push(i);
  }

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 flex items-center justify-center gap-2 px-6">
      {visibleDots.map((index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`transition-all duration-300 rounded-full ${
            index === current
              ? "w-8 h-2 bg-primary"
              : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
          }`}
          aria-label={`Go to name ${index + 1}`}
        />
      ))}
    </div>
  );
};