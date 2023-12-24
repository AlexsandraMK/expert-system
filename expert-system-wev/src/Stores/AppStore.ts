import { IObservableArray, makeAutoObservable, observable } from "mobx";
import { QuestionStore } from "./QuestionStore";
import { ProtocolType } from "../Components/Types/ProtocolType";
import { QuestionSender } from "../Sender/QuestionSender";
import { maxQuestions } from "..";

class AppStore {
  closeQuestionsIds: IObservableArray<string> = observable.array([]);
  allChooseAnswersIds: IObservableArray<string> = observable.array([]);
  protocols: IObservableArray<ProtocolType> = observable.array([]);
  questionsStores: QuestionStore[] = [];

  public async addAnswerAsync(questionStore: QuestionStore) {
    this.questionsStores.push(questionStore);
    // send
    QuestionSender.sendAnswerByQuestionIdAsync(
      questionStore.questionId,
      questionStore.chooseAnswersIds
    ).then(() => {
      this.closeQuestionsIds.push(questionStore.questionId);

      this.allChooseAnswersIds.replace(
        this.allChooseAnswersIds.concat(questionStore.chooseAnswersIds)
      );
      if (this.closeQuestionsIds.length == maxQuestions)
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

  restartExpertSystem = () => {
    QuestionSender.sendRestartAsync().then(() => {
      this.allChooseAnswersIds.replace([]);
      this.closeQuestionsIds.replace([]);
      this.protocols.replace([]);
      this.questionsStores.forEach((questionStore: QuestionStore) => {
        questionStore.clearAnswers();
      });
      this.questionsStores.splice(0, this.questionsStores.length);
    });
  };

  openProtocol = () => {
    this.showProtocol = true;
  };

  closeProtocol = () => {
    this.showProtocol = false;
  };
}

export default new AppStore();
