import { AnswerType } from "./AnswerType";

export type QuestionType = {
  id: string;
  text: string;
  isOneAnswer: boolean;
  answers: AnswerType[];
};
