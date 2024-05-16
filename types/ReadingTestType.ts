import type ParagraphType from "./ParagraphType.ts";
import type QuestionType from "./QuestionType.ts";

export default interface ReadingTestType {
    text: ParagraphType[];
    questions: QuestionType[];
}
