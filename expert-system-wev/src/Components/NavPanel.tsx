import React from "react";
import styled from "styled-components";
import { LinkType } from "./Types/LinkType";
import { NavLinkDefault } from "./NavLink";

type NavPanelProps = {
  flex_direction?: string;
};

const StyledNavPanel = styled.div<NavPanelProps>`
  display: flex;
  flex-direction: ${({ flex_direction }) => flex_direction};
  justify-content: space-evenly;
  padding: 5px;
  margin: 5px;
`;

export const NavPanel: React.FC<{ links: LinkType[] } & NavPanelProps> = ({
  links,
  flex_direction = "row",
}) => {
  return (
    <StyledNavPanel flex_direction={flex_direction}>
      {links.map((link: LinkType) => (
        <NavLinkDefault
          key={link.to}
          to={link.to}
          text={link.text}
        />
      ))}
    </StyledNavPanel>
  );
};
