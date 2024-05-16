import ReadingTestType from "../../../types/ReadingTestType.ts";

export const fetchReadingTest = async (level: string): Promise<ReadingTestType> => {
    const response = await fetch(`http://localhost:3000/generateReadingTest?level=${level}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as ReadingTestType;
};
