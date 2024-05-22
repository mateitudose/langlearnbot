import Anthropic from "@anthropic-ai/sdk";
import {evaluateWriting} from "./prompts/evaluateWriting.ts";
import type WritingEvaluationType from "../types/WritingEvaluationType.ts";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function generateWritingScore({level, essay, task}: {
    level: string,
    essay: string,
    task: string
}): Promise<WritingEvaluationType> {
    const generatedWritingScore = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 4000,
        temperature: 0.9,
        messages: [{role: "user", content: evaluateWriting(level, essay, task)}]
    });
    return JSON.parse(generatedWritingScore.content[0].text);
}



