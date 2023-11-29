import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuestionsWindow } from "./Components/QuestionsWindow/QuestionsWindow";
import { AnswersWindow } from "./Components/AnswersWindow/AnswersWindow";
import App from "./App.jsx";
import { QuestionStore } from "./Stores/QuestionStore";

var questions = require("./Resources/questions.json");

export let maxQuestions = questions.patient.length + questions.user.length + questions.protocol.length + questions.project.length;

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
            element: <AnswersWindow questionStore={new QuestionStore}/>,
            loader: ({ params }) => {
              return questions.patient.find(
                (element) => element.id === params.question_id
              );
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
            element: <AnswersWindow questionStore={new QuestionStore}/>,
            loader: ({ params }) => {
              return questions.project.find(
                (element) => element.id === params.question_id
              );
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
            element: <AnswersWindow questionStore={new QuestionStore}/>,
            loader: ({ params }) => {
              return questions.user.find(
                (element) => element.id === params.question_id
              );
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
            element: <AnswersWindow questionStore={new QuestionStore}/>,
            loader: ({ params }) => {
              return questions.protocol.find(
                (element) => element.id === params.question_id
              );
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
