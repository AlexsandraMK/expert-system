export const serverOrigin = "http://localhost:8080";

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

    let answer: any & { status: number; message: string } =
      await response.json();

    if (answer.status !== 200) {
      throw Error(answer.message);
    }
    return answer;
  }
}