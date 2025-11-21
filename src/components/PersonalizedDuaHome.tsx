import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface RecommendedName {
  name: string;
  reason: string;
}

interface GeneratedDua {
  arabic: string;
  transliteration: string;
  translation: string;
  namesUsed: string[];
}

export const PersonalizedDuaHome = () => {
  const [situation, setSituation] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [recommendedNames, setRecommendedNames] = useState<RecommendedName[]>([]);
  const [showAllNames, setShowAllNames] = useState(false);
  const [generatedDuas, setGeneratedDuas] = useState<GeneratedDua[]>([]);
  const { toast } = useToast();

  const handleAnalyzeSituation = async () => {
    if (!situation.trim()) {
      toast({
        title: "Please describe your situation",
        description: "Enter what you'd like to make dua for",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setRecommendedNames([]);
    setShowAllNames(false);

    try {
      const { data, error } = await supabase.functions.invoke('generate-dua', {
        body: { 
          situation: situation,
          type: 'recommend'
        }
      });

      if (error) throw error;

      if (data?.names) {
        setRecommendedNames(data.names);
      }
    } catch (error: any) {
      console.error('Error analyzing situation:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to analyze situation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleGenerateDua = async () => {
    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-dua', {
        body: { 
          situation: situation,
          type: 'personalized'
        }
      });

      if (error) throw error;

      if (data?.dua) {
        setGeneratedDuas(prev => [data.dua, ...prev]);
      }
    } catch (error: any) {
      console.error('Error generating dua:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate dua. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const visibleNames = showAllNames ? recommendedNames : recommendedNames.slice(0, 3);

  return (
    <Card className="p-6 space-y-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Personalized Dua Generator</h2>
      </div>

      <div className="space-y-3">
        <Textarea
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          placeholder="Describe your situation or what you'd like to make dua for..."
          className="min-h-[100px] resize-none"
        />
        
        <Button
          onClick={handleAnalyzeSituation}
          disabled={isAnalyzing || !situation.trim()}
          className="w-full"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Find Best Names for This Dua"
          )}
        </Button>
      </div>

      {recommendedNames.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
            Recommended Names of Allah
          </h3>
          
          <div className="space-y-2">
            {visibleNames.map((nameRec, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-3 space-y-1">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {nameRec.name}
                </Badge>
                <p className="text-xs text-muted-foreground">{nameRec.reason}</p>
              </div>
            ))}
          </div>

          {recommendedNames.length > 3 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllNames(!showAllNames)}
              className="w-full"
            >
              {showAllNames ? "Show Less" : `Show All ${recommendedNames.length} Names`}
            </Button>
          )}

          <Button
            onClick={handleGenerateDua}
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Dua...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Personalized Dua
              </>
            )}
          </Button>
        </div>
      )}

      {generatedDuas.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
              Generated Duas
            </h3>
            <Button
              onClick={handleGenerateDua}
              disabled={isGenerating}
              variant="outline"
              size="sm"
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-1" />
                  Generate Another
                </>
              )}
            </Button>
          </div>

          {generatedDuas.map((dua, index) => (
            <Card key={index} className="p-4 space-y-3 bg-card">
              <div className="flex flex-wrap gap-1">
                {dua.namesUsed.map((name, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {name}
                  </Badge>
                ))}
              </div>
              
              <p className="arabic-text text-xl text-foreground leading-loose text-right">
                {dua.arabic}
              </p>
              
              <p className="text-xs text-muted-foreground italic">
                {dua.transliteration}
              </p>
              
              <p className="text-sm text-foreground">
                {dua.translation}
              </p>
            </Card>
          ))}
        </div>
      )}
    </Card>
  );
};
