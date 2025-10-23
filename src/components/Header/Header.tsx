import { StyledContainer, StyledHeader, StyledNavLink } from "./Header.styled";

export const Header = () => {

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
