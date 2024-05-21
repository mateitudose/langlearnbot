export const writingTaskPrompt = (cefr_level: string) => {
    return `
        Your task is to create a writing prompt for an essay similar to those found in Cambridge English exams. The essay task you generate should be appropriate for the following CEFR level: ${cefr_level}
        To ensure the task is suitable for this level, consider the following guidelines:
        - For A1-A2 levels, the task should require only simple vocabulary and grammar structures. The essay length should be around 100-150 words.
        - For B1-B2 levels, the task can include more complex topics and require use of more advanced language. The essay length should be around 150-250 words.
        - For C1-C2 levels, the task should allow the test-taker to demonstrate a wide range of language skills and the ability to write on complex subjects. The essay length should be around 250-400 words.
        The task you create should include a clear prompt or question to respond to, along with any specific points that need to be addressed in the essay.
        Output only the generated task in JSON format like this, do not use any back ticks, new lines or any other markdown writing in the output JSON string:
        {"task": "your generated writing task goes here"}
    `;
}
