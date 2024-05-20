export const readingTextPrompt = (cefr_level: string) => {
    return `
    {
        "cefr_level": "${cefr_level}",
        "text_length": "medium",
        "topics_avoided": ["politics", "religion", "violence", "sexuality", "drugs", "alcohol", "tobacco", "gambling", "weapons"],
        "prompt": "Develop a reading task tailored to the mentioned CEFR level. Craft a text comprising approximately 5 paragraphs (each paragraph about 6-7 lines of text, paragraphs separated using an empty line), ensuring its appropriateness for the specified proficiency level and avoiding contentious subjects like topics_avoided. 
        Generate five questions, each stemming from one paragraph of the text. The 3 possible answers that you will give should be more difficult to understand with the increase in level, and they must be at most 15-20 words, no more. Also, you should not use the same words and sentences in the answers, try rephrasing or giving an answer that is close in meaning, to make it more difficult.
        Follow the JSON structure, you can input your text only where there are brackets {}, inside the {} there is an explanation on what content is expected. Return just the answer in JSON format, without shorting the text, if needed you can add new line characters: {
        "text": [
            {"paragraph": "Here goes a paragraph of the text"},
        ],
            questions: [
                {   
                "question": "{Replace with Question}",
                "answers": [
                        {"option": "A", "text": "{Replace with Answer A}"},
                        {"option": "B", "text": "{Replace with Answer B}"},
                        {"option": "C", "text": "{Replace with Answer C}"},
                    ],
                "correct_answer": "{Mention the correct option answer here}",
                },
            ],
        }",
    }
    `;
};
