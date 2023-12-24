import { error } from "console";

export const serverOrigin = "http://localhost:8000";

export class Sender {
  static async sendRequest(requestParams: {
    url: string;
    method: string;
    body?: any;
    headers?: any;
  }) {
    const response = await fetch(requestParams.url, {
      method: requestParams.method,
      body: requestParams.body,
      headers: requestParams.headers,
    });

    let answer = response
      .json()
      .then((answer) => {
        if (!response.ok) {
          throw Error(answer.message);
        }

        return answer;
      })
      .catch((error) => {
        console.log(error);
      });

    return answer;
  }
}
