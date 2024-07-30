import WritingEvaluationType from "../../../types/WritingEvaluationType.ts";

export const fetchWritingEvaluation = async ({level, essay, task}: {
    level: string,
    essay: string,
    task: string
}): Promise<WritingEvaluationType> => {
    const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

    const MAX_RETRIES = 2;
    let retryCount = 0;

    while (retryCount <= MAX_RETRIES) {
        try {
            const response = await fetch(`http://localhost:3000/generateWritingScore?level=${level}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "essay": essay, "task": task })
            });
            if (!response.ok) {
                throw new Error("Failed to fetch writing test");
            }

            return await response.json();
        } catch (error) {
            if (retryCount < MAX_RETRIES) {
                retryCount++;
                await delay(1000);
            } else {
                return error as WritingEvaluationType;
            }
        }
    }

    return {} as WritingEvaluationType;
}
