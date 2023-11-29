import { IObservableArray, makeAutoObservable, observable } from "mobx";
import { QuestionType } from "../Components/Types/QuestionType";
import { AnswerType } from "../Components/Types/AnswerType";

export class QuestionStore {
    public questionText: string = "";
    public existingAnswers: IObservableArray<AnswerType> = observable.array([]);
    public answers: IObservableArray<AnswerType> = observable.array([]);
    public isOneAnswer: boolean = false;
    public isOpen: boolean = true;
    public questionId : string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public setQuestion = (question: QuestionType) => {
    this.questionId = question.id;
    this.questionText = question.text;
    this.existingAnswers.replace(question.answers);
    this.isOneAnswer = question.isOneAnswer;
  };

  public closeQuestion = () => {
    this.isOpen = false;
  }
}


