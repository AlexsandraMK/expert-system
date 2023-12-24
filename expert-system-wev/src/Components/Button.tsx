import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  margin: 10px 20px;
  padding: 5px;
  background-color: #e19cc4;
  color: #85004b;
  font-size: 15px;
  width: 200px;
  border: 0;
  border-radius: 5px;

  &:hover {
    background-color: #85004b;
    color: #e19cc4;
  }
`;

export const StyledButtonWithChangeColor = styled(StyledButton)<{
  background?: string;
  color?: string;
}>`
  background-color: ${({ background = "#e19cc4" }) => background};
  color: ${({ color = "#85004b" }) => color};
`;
