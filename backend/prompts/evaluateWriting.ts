export const evaluateWriting = (cefr_level: string, essay: string, task: string) => {
    return `
        Here is the essay to evaluate and score:
    
        ${essay}
        
        Please take into account that this was the given task:
        
        ${task}
        
        Read the essay and task carefully and evaluate it knowing that it was written by a ${cefr_level} candidate on the following four criteria:
        1. Task achievement (max 25 points) 
        2. Coherence and cohesion (max 25 points)
        3. Lexical resource (max 25 points)
        4. Grammatical range and accuracy (max 25 points)
        
        Sum up the scores you assigned for each criteria to calculate the overall score for the essay. The overall score should be on a scale from 0 to 100.
        Output just the final overall score in the following JSON format:
        {"score": "insert the overall score from 0 to 100 here"}
    `;
}
