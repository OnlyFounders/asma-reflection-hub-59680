import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { situation, name } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Generating dua for situation:', situation);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an Islamic scholar specializing in creating personalized duas (supplications) that invoke Allah by His Beautiful Names. 

Your task is to create authentic, heartfelt duas in Arabic (with transliteration) that:
1. Use the specific Name of Allah provided (${name})
2. Address the user's specific situation
3. Follow proper Islamic etiquette for making dua
4. Are concise yet meaningful (2-3 sentences maximum)
5. Use proper Arabic grammar and Islamic terminology

Format your response as:
**Arabic:** [Arabic text]
**Transliteration:** [Romanized Arabic]
**Translation:** [English translation]

Keep the dua sincere, appropriate, and rooted in Islamic tradition.`
          },
          {
            role: 'user',
            content: `Create a personalized dua for someone who is: ${situation}\n\nUse the name of Allah: ${name}`
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits depleted. Please add more credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error('Failed to generate dua');
    }

    const data = await response.json();
    const generatedDua = data.choices[0].message.content;

    console.log('Successfully generated dua');

    return new Response(
      JSON.stringify({ dua: generatedDua }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-dua function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
