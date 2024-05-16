import type AnswerType from "./AnswerType.ts";

export default interface QuestionType {
    question: string;
    answers: AnswerType[];
    correct_answer: string;
}
