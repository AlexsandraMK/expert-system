import { AnswerType } from "../Types/AnswerType";
import { StyledH1 } from "../Texts";
import AppStore from "../../Stores/AppStore";
import { observer } from "mobx-react";
import { styled } from "styled-components";
import { StyledButton, StyledButtonWithChangeColor } from "../Button";
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
            {AppStore.allChooseAnswersIds.includes(answer.id) && (
              <StyledButtonWithChangeColor
                background="#85004b"
                color="#e19cc4"
                onClick={() => {
                  questionStore.addAnswer(answer.id);
                  AppStore.addAnswerAsync(questionStore).then(() => {
                    questionStore.closeQuestion();
                  });
                }}
              >
                {answer.text}
              </StyledButtonWithChangeColor>
            )}
            {!AppStore.allChooseAnswersIds.includes(answer.id) && (
              <StyledButtonWithChangeColor
                onClick={() => {
                  questionStore.addAnswer(answer.id);
                  AppStore.addAnswerAsync(questionStore).then(() => {
                    questionStore.closeQuestion();
                  });
                }}
              >
                {answer.text}
              </StyledButtonWithChangeColor>
            )}
          </div>
        ))}
      </>
    );
  }
);

const Buttons: React.FC<{ answer: AnswerType; questionStore: QuestionStore }> =
  observer(({ answer, questionStore }) => {
    return (
      <StyledConteiner>
        {AppStore.allChooseAnswersIds.includes(answer.id + "_green") && (
          <StyledInput background="green" id={answer.id} />
        )}
        {AppStore.allChooseAnswersIds.includes(answer.id + "_red") && (
          <StyledInput background="red" id={answer.id} />
        )}

        {!AppStore.allChooseAnswersIds.includes(answer.id + "_green") &&
          !AppStore.allChooseAnswersIds.includes(answer.id + "_red") && (
            <StyledInput
              background="white"
              id={answer.id}
              onClick={(event: any) => {
                event.preventDefault();

                if (event.target.style.background == "green") {
                  questionStore.removeAnswer(answer.id + "_green");
                  questionStore.addAnswer(answer.id + "_red");
                  event.target.style.background = "red";
                } else if (event.target.style.backgroundColor == "red") {
                  questionStore.removeAnswer(answer.id + "_red");
                  event.target.style.background = "white";
                } else if (
                  event.target.style.backgroundColor == "white" ||
                  event.target.style.backgroundColor == ""
                ) {
                  questionStore.addAnswer(answer.id + "_green");
                  event.target.style.background = "green";
                }
              }}
            />
          )}

        <label>{answer.text}</label>
      </StyledConteiner>
    );
  });

const ManyAnswers: React.FC<{ questionStore: QuestionStore }> = observer(
  ({ questionStore }) => {
    return (
      <>
        {questionStore.existingAnswers.map((answer: AnswerType) => (
          <Buttons answer={answer} questionStore={questionStore} />
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
          <StyledConteiner fd="column">
            <div className="grid">
              {questionStore.isOneAnswer === true && (
                <OneAnswer questionStore={questionStore} />
              )}
              {questionStore.isOneAnswer !== true && (
                <ManyAnswers questionStore={questionStore} />
              )}
            </div>
            {questionStore.isOneAnswer !== true && (
              <StyledButton
                onClick={() => {
                  AppStore.addAnswerAsync(questionStore).then(() => {
                    questionStore.closeQuestion();
                  });
                }}
              >
                Ответить
              </StyledButton>
            )}
          </StyledConteiner>
          {questionStore.isOneAnswer !== true && <></>}
        </AnswersDiv>
        {AppStore.closeQuestionsIds.includes(questionStore.questionId) && (
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
