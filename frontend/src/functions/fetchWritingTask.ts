import WritingTestType from "../../../types/WritingTaskType.ts";

export const fetchWritingTask = async (level: string): Promise<WritingTestType> => {
    const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

    const MAX_RETRIES = 0;
    let retryCount = 0;

    while (retryCount <= MAX_RETRIES) {
        try {
            const response = await fetch(`http://localhost:3000/generateWritingTask?level=${level}`);
            if (!response.ok) {
                throw new Error("Failed to fetch reading test");
            }
            return await response.json();
        } catch (error) {
            if (retryCount < MAX_RETRIES) {
                retryCount++;
                await delay(1000);
            } else {
                return error as WritingTestType;
            }
        }
    }

    return {} as WritingTestType;
};
