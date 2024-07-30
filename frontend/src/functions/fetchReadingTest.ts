import ReadingTestType from "../../../types/ReadingTestType.ts";

export const fetchReadingTest = async (level: string): Promise<ReadingTestType> => {
    const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

    const MAX_RETRIES = 2;
    let retryCount = 0;

    while (retryCount <= MAX_RETRIES) {
        try {
            const response = await fetch(`http://localhost:3000/generateReadingTest?level=${level}`);
            if (!response.ok) {
                throw new Error("Failed to fetch reading test");
            }
            return await response.json();
        } catch (error) {
            if (retryCount < MAX_RETRIES) {
                retryCount++;
                await delay(1000);
            } else {
                return error as ReadingTestType;
            }
        }
    }

    return {} as ReadingTestType;
};
