import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Sparkles, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface DuaGeneratorProps {
  currentName: string;
}

export const DuaGenerator = ({ currentName }: DuaGeneratorProps) => {
  const [situation, setSituation] = useState("");
  const [generatedDua, setGeneratedDua] = useState("");
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
    setGeneratedDua("");

    try {
      const { data, error } = await supabase.functions.invoke('generate-dua', {
        body: { situation: situation.trim(), name: currentName }
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedDua(data.dua);
      toast({
        title: "Dua generated",
        description: "May Allah accept your supplication",
      });
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
    <Card className="p-6 bg-background/50 backdrop-blur-sm border-primary/20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">PERSONAL DUA GENERATOR</h3>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Going through something specific? Describe your situation below, and receive a personalized Dua invoking Allah as <span className="font-semibold text-primary">{currentName}</span>.
        </p>

        <div className="relative">
          <Textarea
            placeholder="e.g., I am feeling anxious about my exam results and need peace..."
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            className="min-h-[100px] pr-12 resize-none"
            disabled={isLoading}
          />
          <Button
            size="icon"
            className="absolute bottom-3 right-3 h-8 w-8"
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

        {generatedDua && (
          <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="whitespace-pre-wrap text-sm text-foreground">
              {generatedDua}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
