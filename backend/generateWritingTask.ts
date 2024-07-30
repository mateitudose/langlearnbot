import Anthropic from "@anthropic-ai/sdk";
import {writingTaskPrompt} from "./prompts/writingTask.ts";
import type WritingTestType from "../types/WritingTaskType.ts";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function generateWritingTask(level: string): Promise<WritingTestType> {
    const generatedWritingTask = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 3000,
        temperature: 0.9,
        messages: [{role: "user", content: writingTaskPrompt(level)}]
    });
    return JSON.parse(generatedWritingTask.content[0].text);
}



