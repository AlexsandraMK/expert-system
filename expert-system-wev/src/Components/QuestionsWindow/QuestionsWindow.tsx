import { styled } from "styled-components";
import { NavPanel } from "../NavPanel";
import { Outlet } from "react-router-dom";
import { QuestionType } from "../Types/QuestionType";
import { LinkType } from "../Types/LinkType";

const StyledQuestionsWindow = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: groove #e184ba 10px;
  padding: 20px;

  > div {
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }

  .left-div {
    float: left;
    box-shadow: 0 0 5px 1px #e184ba;
    width: 30%;
  }

  .right-div {
    position: relative;
    overflow: hidden;
    float: right;
    box-shadow: 0 0 5px 1px #e184ba;
    flex-grow: 1;
  }
`;

export const QuestionsWindow: React.FC<{
  questions: QuestionType[];
}> = ({ questions }) => {
  console.log(questions);

  let links: LinkType[] = Array.from(questions, (question) => {
    return {
      to: "question/" + question.id,
      text: ">\t" + question.text,
      id: question.id,
    };
  });
  return (
    <StyledQuestionsWindow>
      <div className="left-div">
        <NavPanel flex_direction="column" links={links}></NavPanel>
      </div>
      <div className="right-div">
        <Outlet />
      </div>
    </StyledQuestionsWindow>
  );
};
