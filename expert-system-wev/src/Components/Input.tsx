import styled from "styled-components";

export const StyledInput = styled.button<{
  background?: string;
  zIndex?: string;
}>`
  margin: 10px;
  position: relative;
  z-index: ${({ zIndex = "1px" }) => zIndex};
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ background = "white" }) => background};
`;
