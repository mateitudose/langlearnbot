export const readingTextPrompt = (cefr_level : string) => {
    return `
    {
        "cefr_level": "${cefr_level}",
        "text_length": "medium",
        "topics_avoided": ["politics", "religion", "violence", "sexuality", "drugs", "alcohol", "tobacco", "gambling", "weapons"],
        "prompt": "Develop a reading task tailored to the mentioned CEFR level. Craft a text comprising approximately 5 paragraphs (each paragraph about 6-7 lines of text, paragraphs separated using an empty line), ensuring its appropriateness for the specified proficiency level and avoiding contentious subjects like topics_avoided. Generate five questions, each stemming from one paragraph of the text. The 3 possible answers that you will give should be more difficult to understand with the increase in level, and they must be at most 15-20 words, no more. Return just the answer in JSON format, without shorting the text, if needed you can add new line characters: {
        "text": [
            {"paragraph": "Here goes a paragraph of the text"},
        ],
            questions: [
                {   
                "question": "Question 1",
                "answers": [
                        {"option": "A", "text": "Answer A"},
                        {"option": "B", "text": "Answer B"},
                        {"option": "C", "text": "Answer C"},
                    ],
                "correct_answer": "A",
                },
            ],
        }",
    }
    `;
};
