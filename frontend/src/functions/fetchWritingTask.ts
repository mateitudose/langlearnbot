import WritingTestType from "../../../types/WritingTaskType.ts";

export const fetchWritingTask = async (level: string): Promise<WritingTestType> => {
    // TODO: Implement a better way to handle retries
    let retry = false;
    while (true) {
        try {
            const response = await fetch(`http://localhost:3000/generateWritingTask?level=${level}`);
            if (!response.ok) {
                throw new Error("Failed to fetch reading test");
            }
            return await response.json();
        } catch (error) {
            if (!retry) {
                retry = true;
            } else {
                return error as WritingTestType;
            }
        }
    }
};
