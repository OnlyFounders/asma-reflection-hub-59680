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
    const { situation, nameOfAllah, type } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    let systemPrompt = '';
    let userPrompt = '';

    if (type === 'famous' && nameOfAllah) {
      // Search for famous invocations from Quran/Hadith using this name
      systemPrompt = `You are an Islamic scholar with deep knowledge of authentic Hadith and the Quran. Find ACTUAL DUAS (supplications/prayers) that use the Name of Allah: "${nameOfAllah}".

CRITICAL REQUIREMENTS:
- Return ONLY actual duas (supplications/prayers), NOT regular verses that just mention the name
- A dua must be a direct supplication to Allah (starting with words like "Allahumma", "Rabbana", "Ya Allah", etc.)
- Prioritize authentic Hadith duas FIRST
- Include maximum 1-2 Quranic duas (only if they are actual supplications)
- PREFER SHORT AND CONCISE duas (2-4 lines maximum in Arabic)
- AVOID extremely long duas that span many paragraphs
- Examples of preferred length: "Allahumma Ya Ahadu Ya Samadu Ya Nurun Ya 'Alimu Ya Aliyyu Ya Azimu, Ighfir liya adh-dhunuba allati la yaghfiruha ghayruka"
- DO NOT include regular Quranic verses that are statements or narratives
- DO NOT include duas longer than 5-6 lines of Arabic text

Return ONLY a JSON object with this EXACT structure (no markdown, no code blocks):
{
  "invocations": [
    {
      "source": "Source reference (e.g., 'Tirmidhi 3590', 'Bukhari 6407', or 'Surah Al-Baqarah 2:201' for Quranic duas)",
      "arabic": "The original Arabic dua text with diacritics",
      "transliteration": "Romanized transliteration",
      "translation": "English translation"
    }
  ]
}

Provide 3-5 authentic SHORT duas. Prioritize concise Hadith duas, then add 1-2 short Quranic duas if available.`;

      userPrompt = `Find authentic SHORT and CONCISE duas (actual supplications, 2-4 lines maximum) from Hadith and Quran that use the name "${nameOfAllah}". Prioritize short Hadith duas first. Avoid long supplications. Return only brief, practical supplications.`;

    } else if (type === 'recommend' && situation) {
      // Recommend best names for the situation
      systemPrompt = `You are an Islamic scholar specialized in the 99 Names of Allah. Analyze the situation and recommend the most appropriate Names of Allah to call upon.

Return ONLY a JSON object with this EXACT structure (no markdown, no code blocks):
{
  "names": [
    {
      "name": "Name of Allah in English (e.g., 'Ar-Rahman')",
      "reason": "Brief explanation of why this name is suitable for this situation"
    }
  ]
}

Provide 5-8 most relevant names.`;

      userPrompt = `Recommend the best Names of Allah to invoke for this situation: "${situation}"`;

    } else if (type === 'personalized' && situation) {
      // Generate personalized dua
      systemPrompt = `You are an Islamic scholar specialized in creating authentic Arabic duas. Generate a personalized dua for the given situation using the most appropriate Names of Allah.

The dua should:
1. Be in classical Arabic following Islamic prayer conventions
2. Use multiple appropriate Names of Allah naturally
3. Be authentic to Islamic tradition
4. Follow traditional dua structure

Return ONLY a JSON object with this EXACT structure (no markdown, no code blocks):
{
  "dua": {
    "arabic": "The complete dua in Arabic with proper diacritics",
    "transliteration": "Romanized transliteration",
    "translation": "English translation",
    "namesUsed": ["List of Names used in the dua"]
  }
}`;

      userPrompt = `Create a personalized dua for: "${situation}"`;

    } else if (nameOfAllah && situation) {
      // Legacy support for the original personalized dua generator
      systemPrompt = `You are an Islamic scholar specializing in creating personalized duas (supplications) that invoke Allah by His Beautiful Names. 

Your task is to create authentic, heartfelt duas in Arabic (with transliteration) that:
1. Use the specific Name of Allah provided (${nameOfAllah})
2. Address the user's specific situation
3. Follow proper Islamic etiquette for making dua
4. Are concise yet meaningful (2-3 sentences maximum)
5. Use proper Arabic grammar and Islamic terminology

Format your response as:
**Arabic:** [Arabic text]
**Transliteration:** [Romanized Arabic]
**Translation:** [English translation]

Keep the dua sincere, appropriate, and rooted in Islamic tradition.`;

      userPrompt = `Create a personalized dua for someone who is: ${situation}\n\nUse the name of Allah: ${nameOfAllah}`;
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid request parameters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Generating dua with type:', type);

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
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
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
    let generatedContent = data.choices[0].message.content;

    // Try to parse as JSON for structured responses
    if (type === 'famous' || type === 'recommend' || type === 'personalized') {
      try {
        // Remove markdown code blocks if present
        generatedContent = generatedContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsedContent = JSON.parse(generatedContent);
        console.log('Successfully generated structured response');
        return new Response(
          JSON.stringify(parsedContent),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        console.error('Raw content:', generatedContent);
        // Fall through to return as plain text
      }
    }

    // Return as plain text for legacy support
    console.log('Successfully generated dua');
    return new Response(
      JSON.stringify({ dua: generatedContent }),
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
