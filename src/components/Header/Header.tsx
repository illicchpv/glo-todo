// import { NavLink } from "react-router-dom";
// import cl from "./Header.module.scss";
import { StyledContainer, StyledHeader, StyledNavLink } from "./Header.styled";

export const Header = () => {
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   return isActive ? `${cl.link} ${cl.active}` : cl.link;
  // }

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNavLink
          to="/">ToDo</StyledNavLink>
        <StyledNavLink
          to="/list">List</StyledNavLink>
      </StyledContainer>
    </StyledHeader>
  );

}
