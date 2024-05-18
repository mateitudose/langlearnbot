import Anthropic from "@anthropic-ai/sdk";
import {readingTextPrompt} from "./prompts/reading.ts";
import type ReadingTestType from "../types/ReadingTestType.ts";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function generateReadingTest(level: string): Promise<ReadingTestType> {
    const readingTest = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 3000,
        temperature: 0.85,
        messages: [{role: "user", content: readingTextPrompt(level)}]
    });
    return JSON.parse(readingTest.content[0].text);
}



