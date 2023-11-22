import { IObservableArray, makeAutoObservable, observable } from "mobx";
import { QuestionType } from "./Types/QuestionType";
import { AnswerType } from "./Types/AnswerType";

class AppStore {
  public questionText: string = "";
  public answers: IObservableArray<AnswerType> = observable.array([]);
  public isOneAnswer: boolean = false;
  public showProtocol: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuestion = (question: QuestionType) => {
    this.questionText = question.text;
    this.answers.replace(question.answers);
    this.isOneAnswer = question.isOneAnswer;
  };

  openProtocol = () => {
    this.showProtocol = true;
  };

  closeProtocol = () => {
    this.showProtocol = false;
  };
}

export default new AppStore();
