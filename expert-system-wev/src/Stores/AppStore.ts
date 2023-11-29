import { IObservableArray, makeAutoObservable, observable } from "mobx";
import { QuestionStore } from "./QuestionStore";
import { ProtocolType } from "../Components/Types/ProtocolType";
import { QuestionSender } from "../Sender/QuestionSender";
import { maxQuestions } from "..";

class AppStore {
  questionsIds: IObservableArray<string> = observable.array([]);
  protocols: IObservableArray<ProtocolType> = observable.array([]);

  public async addAnswerAsync(questionStore: QuestionStore) {
    let answersId = Array.from(questionStore.existingAnswers, (answer) => answer.id);

    // send
    QuestionSender.sendAnswerByQuestionIdAsync(
      questionStore.questionId,
      answersId
    ).then(() => {
      this.questionsIds.push(questionStore.questionId);

      if (this.questionsIds.length == maxQuestions)
        QuestionSender.sendEndAsync().then((protocolsData) => {
          this.protocols.replace(protocolsData);
          this.showProtocol = true;
        });
    });
  }

  public showProtocol: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  openProtocol = () => {
    this.showProtocol = true;
  };

  closeProtocol = () => {
    this.showProtocol = false;
  };
}

export default new AppStore();
