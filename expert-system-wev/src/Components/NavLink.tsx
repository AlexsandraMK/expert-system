import { NavLink } from "react-router-dom";
import { LinkType } from "./Types/LinkType";

export const NavLinkDefault: React.FC<
  LinkType & { onClick?: (data: any) => any }
> = (props) => {
  return (
    <NavLink
      to={props.to}
      style={({ isActive, isPending }) => {
        return {
          color: isActive ? "#85004b" : "#E184BA",
        };
      }}
    >
      {props.text}
    </NavLink>
  );
};
