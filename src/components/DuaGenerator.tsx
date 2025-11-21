import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface DuaGeneratorProps {
  currentName: string;
}

interface ParsedDua {
  arabic: string;
  transliteration: string;
  translation: string;
}

const parseDuaResponse = (response: string): ParsedDua | null => {
  try {
    const arabicMatch = response.match(/\*\*Arabic:\*\*\s*(.+?)(?=\*\*Transliteration:|\n\n|$)/s);
    const translitMatch = response.match(/\*\*Transliteration:\*\*\s*(.+?)(?=\*\*Translation:|\n\n|$)/s);
    const translationMatch = response.match(/\*\*Translation:\*\*\s*(.+?)$/s);

    if (arabicMatch && translitMatch && translationMatch) {
      return {
        arabic: arabicMatch[1].trim(),
        transliteration: translitMatch[1].trim(),
        translation: translationMatch[1].trim()
      };
    }
    return null;
  } catch {
    return null;
  }
};

export const DuaGenerator = ({ currentName }: DuaGeneratorProps) => {
  const [situation, setSituation] = useState("");
  const [generatedDua, setGeneratedDua] = useState<ParsedDua | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!situation.trim()) {
      toast({
        title: "Please describe your situation",
        description: "Enter what you're going through to receive a personalized dua.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedDua(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-dua', {
        body: { situation: situation.trim(), nameOfAllah: currentName }
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      const parsed = parseDuaResponse(data.dua);
      if (parsed) {
        setGeneratedDua(parsed);
        toast({
          title: "Dua generated",
          description: "May Allah accept your supplication",
        });
      } else {
        throw new Error("Failed to parse dua response");
      }
    } catch (error: any) {
      console.error('Error generating dua:', error);
      toast({
        title: "Failed to generate dua",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg space-y-2">
      {/* DUA Generator Input */}
      <div className="bg-card rounded-2xl p-4 text-left space-y-3 shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
            Personal Dua Generator
          </h3>
        </div>
        
        <p className="text-xs text-muted-foreground">
          Going through something specific? Describe your situation below, and receive a personalized Dua invoking Allah as <span className="font-semibold text-primary">{currentName}</span>.
        </p>

        <div className="relative">
          <Textarea
            placeholder="e.g., I am feeling anxious about my exam results and need peace..."
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            className="min-h-[80px] pr-12 resize-none text-sm"
            disabled={isLoading}
          />
          <Button
            size="icon"
            className="absolute bottom-2 right-2 h-9 w-9 rounded-full"
            onClick={handleGenerate}
            disabled={isLoading || !situation.trim()}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Generated Dua Display - Matching Invocation Style */}
      {generatedDua && (
        <div className="bg-card rounded-2xl p-4 text-left space-y-2 shadow-sm animate-fade-in">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
            Your Personalized Dua
          </h3>
          <p className="arabic-text text-xl text-foreground leading-loose text-right">
            {generatedDua.arabic}
          </p>
          <p className="text-xs text-muted-foreground italic">
            {generatedDua.transliteration}
          </p>
          <p className="text-xs text-foreground leading-relaxed">
            {generatedDua.translation}
          </p>
        </div>
      )}
    </div>
  );
};
