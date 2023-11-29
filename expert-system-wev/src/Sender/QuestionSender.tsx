import { Sender, serverOrigin } from "./Configs";

export class QuestionSender {
  public static async sendAnswerByQuestionIdAsync(
    questionId: string,
    answersId: string[]
  ) {
    /*
    let url: string = serverOrigin + "/send/question";

    let response = await Sender.sendRequest({
      url: url,
      method: "POST",
      body: JSON.stringify({ questionId: questionId, answersId: answersId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
    */
  }

  public static async sendEndAsync() {
    /*
    let url: string = serverOrigin + "/end";

    let response = await Sender.sendRequest({
      url: url,
      method: "GET",
    });

    return response;
    */
    return [{ name: "ЫЫЫЫ", reaction: "Надо валить!" }];
  }
}
