import { AnswerType } from "../Types/AnswerType";
import { StyledH1 } from "../Texts";
import AppStore from "../../Stores/AppStore";
import { observer } from "mobx-react";
import { styled } from "styled-components";
import { StyledButton } from "../Button";
import { QuestionStore } from "../../Stores/QuestionStore";
import { useLoaderData } from "react-router-dom";
import { StyledBackDrop } from "../Modal";
import { StyledInput } from "../Input";
import { StyledConteiner } from "../Container";

const AnswersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    > div {
      margin: 0px 10px;
    }
  }

  > button {
    margin-top: 30px;
  }
`;

const OneAnswer: React.FC<{ questionStore: QuestionStore }> = observer(
  ({ questionStore }) => {
    return (
      <>
        {questionStore.existingAnswers.map((answer: AnswerType) => (
          <div>
            <StyledButton
              onClick={() => {
                AppStore.addAnswerAsync(questionStore).then(() => {
                  questionStore.closeQuestion();
                });
              }}
            >
              {answer.text}
            </StyledButton>
          </div>
        ))}
      </>
    );
  }
);

const ManyAnswers: React.FC<{ questionStore: QuestionStore }> = observer(
  ({ questionStore }) => {
    return (
      <>
        {questionStore.existingAnswers.map((answer: AnswerType) => (
          <StyledConteiner>
            <StyledInput
              id={answer.id}
              onClick={(event: any) => {
                event.preventDefault();
                if (event.target.style.background == "green")
                  event.target.style.background = "red";
                else if (event.target.style.backgroundColor == "red")
                  event.target.style.background = "white";
                else if (
                  event.target.style.backgroundColor == "white" ||
                  event.target.style.backgroundColor == ""
                )
                  event.target.style.background = "green";
              }}
            />
            <label>{answer.text}</label>
          </StyledConteiner>
        ))}
      </>
    );
  }
);

export const AnswersInfo: React.FC<{ questionStore: QuestionStore }> = observer(
  ({ questionStore }) => {
    return (
      <>
        <StyledH1>{questionStore.questionText}</StyledH1>
        <AnswersDiv>
          <div className="grid">
            {questionStore.isOneAnswer === true && (
              <OneAnswer questionStore={questionStore} />
            )}
            {questionStore.isOneAnswer !== true && (
              <>
                <ManyAnswers questionStore={questionStore} />
              </>
            )}
          </div>
          {questionStore.isOneAnswer !== true && (
            <>
              <StyledButton
                onClick={() => {
                  AppStore.addAnswerAsync(questionStore).then(() => {
                    questionStore.closeQuestion();
                  });
                }}
              >
                Ответить
              </StyledButton>
            </>
          )}
        </AnswersDiv>
        {AppStore.questionsIds.includes(questionStore.questionId) && (
          <StyledBackDrop />
        )}
      </>
    );
  }
);

export const AnswersWindow: React.FC<{}> = () => {
  let data: any = useLoaderData();
  let questionStore = new QuestionStore();
  questionStore.setQuestion(data);
  return <AnswersInfo questionStore={questionStore} />;
};
