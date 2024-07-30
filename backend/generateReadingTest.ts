import Anthropic from "@anthropic-ai/sdk";
import {readingTextPrompt} from "./prompts/readingTest.ts";
import type ReadingTestType from "../types/ReadingTestType.ts";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function generateReadingTest(level: string): Promise<ReadingTestType> {
    const generatedReadingTest = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 3000,
        temperature: 0.9,
        messages: [{role: "user", content: readingTextPrompt(level)}]
    });
    return JSON.parse(generatedReadingTest.content[0].text);
}



