import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Loader2, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FamousInvocationsProps {
  currentName: string;
}

interface InvocationData {
  source: string;
  arabic: string;
  transliteration: string;
  translation: string;
}

export const FamousInvocations = ({ currentName }: FamousInvocationsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [invocations, setInvocations] = useState<InvocationData[]>([]);
  const { toast } = useToast();

  const handleFetchInvocations = async () => {
    if (invocations.length > 0) {
      setIsExpanded(!isExpanded);
      return;
    }

    setIsLoading(true);
    setIsExpanded(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-dua', {
        body: { 
          nameOfAllah: currentName,
          type: 'famous'
        }
      });

      if (error) throw error;

      if (data?.invocations) {
        setInvocations(data.invocations);
      }
    } catch (error: any) {
      console.error('Error fetching invocations:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to fetch invocations. Please try again.",
        variant: "destructive",
      });
      setIsExpanded(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl p-4 shadow-sm">
      <Button
        onClick={handleFetchInvocations}
        variant="ghost"
        className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
      >
        <div className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-primary" />
          ) : (
            <ChevronDown className="h-4 w-4 text-primary" />
          )}
          <span className="text-sm font-semibold text-primary">
            {isExpanded ? "Hide" : "View"} Famous Historical Duas
          </span>
        </div>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
      </Button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
              <p className="text-sm">Searching authentic sources...</p>
            </div>
          ) : (
            invocations.map((inv, index) => (
              <div key={index} className="space-y-2 pb-4 border-b border-border last:border-0">
                <div className="flex items-start gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {inv.source}
                  </p>
                </div>
                <p className="arabic-text text-xl text-foreground leading-loose text-right">
                  {inv.arabic}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  {inv.transliteration}
                </p>
                <p className="text-xs text-foreground">
                  {inv.translation}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
