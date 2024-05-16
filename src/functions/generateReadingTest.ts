import Anthropic from "@anthropic-ai/sdk";
import {readingTextPrompt} from "./prompts/reading.ts";

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export default async function generateReadingTest(level: string): Promise<ReadingTest> {
    const readingTest = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 2500,
        temperature: 0.85,
        messages: [{role: "user", content: readingTextPrompt(level)}, {role: "assistant", content: "{"}]
    });

    return JSON.parse(readingTest.content[0].text);
}



