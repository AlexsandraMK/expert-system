import React from "react";
import styled from "styled-components";
import { LinkType } from "./Types/LinkType";
import { NavLinkDefault } from "./NavLink";
import AppStore from "../Stores/AppStore";
import { observer } from "mobx-react";

type NavPanelProps = {
  flex_direction?: string;
};

const StyledNavPanel = styled.div<NavPanelProps>`
  display: flex;
  flex-direction: ${({ flex_direction }) => flex_direction};
  justify-content: space-evenly;
  padding: 5px;
  margin: 5px;

  & > div {
    display: flex;
    align-items:center;
  }
`;

export const NavPanel: React.FC<{ links: LinkType[] } & NavPanelProps> = observer(({
  links,
  flex_direction = "row",
}) => {
  return (
    <StyledNavPanel flex_direction={flex_direction}>
      {links.map((link: LinkType) => (
        <div>
        <NavLinkDefault
            key={link.to}
            to={link.to}
            text={link.text} 
            id={link.id}/>

        {AppStore.questionsIds.includes(link.id) && <img width={20} height={20} src="/img/галочка.svg"/>}
        </div>
      ))}
    </StyledNavPanel>
  );
});
