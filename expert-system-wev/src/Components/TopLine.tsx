import React from "react";
import styled from "styled-components";
import { StyledH1, StyledH4 } from "./Texts";
import AppStore from "./AppStore";

const StyledTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0px;

  border-bottom: ridge #e184ba 10px;

  .authors-div {
    margin: 0px 10%;
  }

  .logo-button {
    background-color: #85004b;
    padding: 10px 20px;
    margin: 0px 40px;
    border: 0;

    ${StyledH1} {
      color: white;
    }
  }
`;

export const TopLine: React.FC<{}> = () => {
  return (
    <StyledTopLine>
      <button className="logo-button" onClick={AppStore.openProtocol} >
        <StyledH1>ФПМИ</StyledH1>
      </button>
      <div className="authors-div">
        <StyledH4>Бортников Никита</StyledH4>
        <StyledH4>Ефименко Александра</StyledH4>
        <StyledH4>Кутузова Ирина</StyledH4>
      </div>
    </StyledTopLine>
  );
};
