import styled from "styled-components";

export const StyledConteiner = styled.div<{ fd?: string }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ fd = "row" }) => fd};
`;
