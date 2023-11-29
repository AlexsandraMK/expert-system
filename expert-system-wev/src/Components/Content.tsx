import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 1250px;
  background-color: white;
  margin: 0px auto;
  box-shadow: 0 0 2px 2px #c23183;
  border-radius: 5px;
  color: #85004b;
  box-sizing: border-box;
`;

export const Content: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledContent>{children}</StyledContent>;
};
