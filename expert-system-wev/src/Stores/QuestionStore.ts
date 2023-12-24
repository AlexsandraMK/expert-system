import { IObservableArray, makeAutoObservable, observable } from "mobx";
import { QuestionType } from "../Components/Types/QuestionType";
import { AnswerType } from "../Components/Types/AnswerType";

export class QuestionStore {
  // Данные по одному вопросу
  public questionText: string = "";
  public isOneAnswer: boolean = false;
  public isOpen: boolean = true;
  public questionId: string = "";
  public existingAnswers: IObservableArray<AnswerType> = observable.array([]);
  public chooseAnswersIds: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public setQuestion = (question: QuestionType) => {
    this.questionId = question.id;
    this.questionText = question.text;
    this.existingAnswers.replace(question.answers);
    this.isOneAnswer = question.isOneAnswer;
  };

  public addAnswer = (answerId: string) => {
    this.chooseAnswersIds.push(answerId);
  };

  public removeAnswer = (answerId: string) => {
    this.chooseAnswersIds = this.chooseAnswersIds.filter((answer: string) => {
      return answer !== answerId;
    });
  };

  public clearAnswers = () => {
    this.chooseAnswersIds = [];
    this.openQuestion();
  };

  public openQuestion = () => {
    this.isOpen = true;
  };

  public closeQuestion = () => {
    this.isOpen = false;
  };
}
