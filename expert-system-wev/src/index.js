import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuestionsWindow } from "./Components/QuestionsWindow/QuestionsWindow";
import { AnswersWindow } from "./Components/AnswersWindow/AnswersWindow";
import App from "./App.jsx";
import AppStore from "./Components/AppStore";

var questions = require("./Resources/questions.json");
console.log(questions);

let answerChildren = [
  {
    path: "question/:question_id",
    element: <AnswersWindow />,
    loader: ({ params }) => {
      AppStore.setQuestion(
        questions.find((element) => element.id === params.question_id)
      );

      return null;
    },
  },
];

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "patient",
        element: <QuestionsWindow questions={questions.patient} />,
        children: [
          {
            path: "question/:question_id",
            element: <AnswersWindow />,
            loader: ({ params }) => {
              AppStore.setQuestion(
                questions.patient.find(
                  (element) => element.id === params.question_id
                )
              );

              return null;
            },
          },
        ],
      },
      {
        path: "project",
        element: <QuestionsWindow questions={questions.project} />,
        children: [
          {
            path: "question/:question_id",
            element: <AnswersWindow />,
            loader: ({ params }) => {
              AppStore.setQuestion(
                questions.project.find(
                  (element) => element.id === params.question_id
                )
              );

              return null;
            },
          },
        ],
      },
      {
        path: "user",
        element: <QuestionsWindow questions={questions.user} />,
        children: [
          {
            path: "question/:question_id",
            element: <AnswersWindow />,
            loader: ({ params }) => {
              AppStore.setQuestion(
                questions.user.find(
                  (element) => element.id === params.question_id
                )
              );

              return null;
            },
          },
        ],
      },
      {
        path: "protocol",
        element: <QuestionsWindow questions={questions.protocol} />,
        children: [
          {
            path: "question/:question_id",
            element: <AnswersWindow />,
            loader: ({ params }) => {
              AppStore.setQuestion(
                questions.protocol.find(
                  (element) => element.id === params.question_id
                )
              );

              return null;
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
