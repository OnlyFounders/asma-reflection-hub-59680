import { useNavigate } from "react-router-dom";
import { Star, BookOpen, Sunrise, Sunset, Moon, Heart, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResourceCard {
  id: string;
  titleArabic: string;
  titleEnglish: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  route?: string;
}

const Home = () => {
  const navigate = useNavigate();

  const resources: ResourceCard[] = [
    {
      id: "names",
      titleArabic: "أَسْمَاءُ اللَّهِ الْحُسْنَىٰ",
      titleEnglish: "99 Names of Allah",
      description: "Explore the beautiful names of Allah with invocations",
      icon: <Star className="h-8 w-8" />,
      isActive: true,
      route: "/names",
    },
    {
      id: "morning",
      titleArabic: "أَذْكَارُ الصَّبَاحِ",
      titleEnglish: "Morning Adhkar",
      description: "Essential morning supplications and remembrances",
      icon: <Sunrise className="h-8 w-8" />,
      isActive: false,
    },
    {
      id: "evening",
      titleArabic: "أَذْكَارُ الْمَسَاءِ",
      titleEnglish: "Evening Adhkar",
      description: "Essential evening supplications and remembrances",
      icon: <Sunset className="h-8 w-8" />,
      isActive: false,
    },
    {
      id: "sleep",
      titleArabic: "أَذْكَارُ النَّوْمِ",
      titleEnglish: "Before Sleep",
      description: "Supplications before going to sleep",
      icon: <Moon className="h-8 w-8" />,
      isActive: false,
    },
    {
      id: "quran",
      titleArabic: "الْقُرْآنُ الْكَرِيمُ",
      titleEnglish: "Quran Daily",
      description: "Read and reflect on the Holy Quran",
      icon: <BookOpen className="h-8 w-8" />,
      isActive: false,
    },
    {
      id: "qibla",
      titleArabic: "اتِّجَاهُ الْقِبْلَةِ",
      titleEnglish: "Qibla Direction",
      description: "Find the direction to face during prayer",
      icon: <Compass className="h-8 w-8" />,
      isActive: false,
    },
  ];

  const handleCardClick = (resource: ResourceCard) => {
    if (resource.isActive && resource.route) {
      navigate(resource.route);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Islamic Resources
          </h1>
          <p className="text-muted-foreground text-lg">
            Your companion for daily remembrance and spiritual growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className={`relative p-6 space-y-4 transition-all ${
                resource.isActive
                  ? "cursor-pointer hover:shadow-lg hover:scale-105 bg-card"
                  : "opacity-70 bg-muted/50"
              }`}
              onClick={() => handleCardClick(resource)}
            >
              {!resource.isActive && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Coming Soon
                </Badge>
              )}

              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {resource.icon}
                </div>
              </div>

              <div className="text-center space-y-2">
                <h2 className="arabic-text text-2xl font-bold text-primary">
                  {resource.titleArabic}
                </h2>
                <h3 className="text-xl font-semibold text-foreground">
                  {resource.titleEnglish}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Favorites Access */}
        <div className="fixed top-6 right-6 z-40">
          <button
            onClick={() => navigate("/favorites")}
            className="h-12 w-12 rounded-full bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center shadow-lg transition-all"
          >
            <Heart className="h-6 w-6 text-primary" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
