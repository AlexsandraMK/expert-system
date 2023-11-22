import { AnswerType } from "../Types/AnswerType";
import { StyledH1 } from "../Texts";
import AppStore from "../AppStore";
import { observer } from "mobx-react";
import { styled } from "styled-components";
import { StyledButton } from "../Button";

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

const OneAnswer: React.FC<{ appStore: any }> = observer(({ appStore }) => {
  return (
    <>
      {AppStore.answers.map((answer: AnswerType) => (
        <div>
          <StyledButton>{answer.text}</StyledButton>
        </div>
      ))}
    </>
  );
});

const ManyAnswers: React.FC<{ appStore: any }> = observer(({ appStore }) => {
  return (
    <>
      {AppStore.answers.map((answer: AnswerType) => (
        <div>
          <input type="checkbox" id={answer.id} />
          <label>{answer.text}</label>
        </div>
      ))}
    </>
  );
});

export const AnswersWindow: React.FC<{}> = observer(() => {
  return (
    <>
      <StyledH1>{AppStore.questionText}</StyledH1>
      <AnswersDiv>
        <div className="grid">
          {AppStore.isOneAnswer === true && <OneAnswer appStore={AppStore} />}
          {AppStore.isOneAnswer !== true && (
            <>
              <ManyAnswers appStore={AppStore} />
            </>
          )}
        </div>
        {AppStore.isOneAnswer !== true && (
          <>
            <StyledButton>Ответить</StyledButton>
          </>
        )}
      </AnswersDiv>
    </>
  );
});
