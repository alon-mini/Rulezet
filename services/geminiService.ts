import { GoogleGenAI, Type } from '@google/genai';
import { FormData, Report, ReportSection, Language } from '../types';
import { LEGAL_TEXTS_STRUCTURED } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

function buildCitationsForReport(formData: FormData, language: Language): Record<string, string> {
  const allTexts = LEGAL_TEXTS_STRUCTURED;
  
  let relevantTextObjects: Record<string, { key: string; text: Record<Language, string> }> = {
    ...allTexts.health,
  };

  // Fire department rules
  if (formData.seatingCapacity <= 50 && formData.size <= 150) {
    relevantTextObjects = { ...relevantTextObjects, ...allTexts.fire_declaration };
  } else {
    relevantTextObjects = { ...relevantTextObjects, ...allTexts.fire_full };
  }

  // Police rules
  if (formData.servesAlcohol || formData.seatingCapacity > 200) {
    relevantTextObjects = { ...relevantTextObjects, ...allTexts.police };
  } else {
    relevantTextObjects.exemption_3_2_2 = allTexts.police.exemption_3_2_2;
  }
  
  const citationsMap: Record<string, string> = {};
  for (const key in relevantTextObjects) {
      const item = relevantTextObjects[key];
      citationsMap[item.key] = item.text[language];
  }

  return citationsMap;
}


export async function generateReport(formData: FormData, language: Language): Promise<Report> {
  const relevantCitations = buildCitationsForReport(formData, 'he'); // Always send Hebrew citations to the model
  const legislationForPrompt = Object.entries(relevantCitations)
    .map(([key, text]) => `[Citation Key: ${key}] ${text}`)
    .join('\n');

  const languageMap = {
    he: "Hebrew",
    en: "English",
    ru: "Russian"
  };
  const targetLanguage = languageMap[language];

  const prompt = `
    System Instruction:
    You are an expert consultant specializing in Israeli restaurant licensing. Your task is to analyze a restaurant's details and relevant legal texts (provided in Hebrew) to create a clear, personalized, and actionable licensing report for the owner. The report MUST be in ${targetLanguage}.

    Restaurant Details:
    - Business Size: ${formData.size} square meters
    - Seating Capacity: ${formData.seatingCapacity} people
    - Serves Alcohol: ${formData.servesAlcohol ? 'Yes' : 'No'}
    - Kosher Certified: ${formData.kosher ? 'Yes' : 'No'}
    - Food Type: ${formData.foodType}
    - Delivery Service: ${formData.deliveryService}

    Relevant Legislation Snippets (in Hebrew):
    ---
    ${legislationForPrompt}
    ---

    Task:
    Based on the restaurant's details and the provided Hebrew legislation, generate a report in ${targetLanguage}.
    The report must be structured in the JSON format defined in the response schema.
    The language must be simple, clear, and encouraging. Avoid legal jargon.

    **Priority Assignment Logic:**
    You must dynamically assign a priority ('High', 'Medium', or 'Low') to each section based on the following criteria, NOT just the section title:
    - **High Priority:** Use for requirements that pose a significant safety risk, are fundamental legal blockers to opening, or require substantial cost and planning (e.g., installing a fire sprinkler system, mandatory CCTV, major structural requirements).
    - **Medium Priority:** Use for important, ongoing compliance tasks that are crucial for operation but are not immediate blockers (e.g., regular equipment maintenance, specific food handling protocols, most signage).
    - **Low Priority:** Use for administrative tasks, best practices, or requirements with a lower immediate impact (e.g., keeping specific documents on file for inspection, simple record-keeping). If a section only explains an EXEMPTION, it should be 'Low' priority.

    For each item in the 'actionItems' array, provide an object with 'text' and 'citationKey'. The 'citationKey' MUST be one of the keys from the legislation snippets (e.g., 'police_cctv_install_3_3_1').
    If the business is exempt from a rule (like the police CCTV rule based on 'police_exemption_3_2_2'), create a section explaining the exemption. The action item should state that no action is needed and link it to the 'police_exemption_3_2_2' citationKey. The priority for such a section should be 'Low'.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      sections: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: `The title of the regulatory section in ${targetLanguage}.`,
            },
            priority: {
              type: Type.STRING,
              description: "Priority level: 'High', 'Medium', or 'Low', assigned based on the dynamic priority logic.",
            },
            summary: {
              type: Type.STRING,
              description: `A concise summary of the requirements in this section, written in simple ${targetLanguage}.`,
            },
            actionItems: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                   text: {
                      type: Type.STRING,
                      description: `The clear, actionable step for the owner in ${targetLanguage}.`
                    },
                    citationKey: {
                      type: Type.STRING,
                      description: "The corresponding citation key from the provided legislation."
                    }
                },
                required: ["text", "citationKey"]
              },
            },
          },
          required: ["title", "priority", "summary", "actionItems"],
        },
      },
    },
    required: ["sections"],
  };

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema,
        }
    });

    const jsonText = response.text.trim();
    const cleanedJson = jsonText.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    const parsedJson: { sections: ReportSection[] } = JSON.parse(cleanedJson);
    
    // Get the citations in the target language for the UI display
    const translatedCitations = buildCitationsForReport(formData, language);

    const finalReport: Report = {
        sections: parsedJson.sections,
        citations: translatedCitations,
    };

    return finalReport;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate report from Gemini API.");
  }
}
