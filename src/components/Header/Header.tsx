import { useDispatch } from "react-redux";
import { StyledContainer, StyledHeader, StyledNavLink, StyledToggleBlock } from "./Header.styled";
import { toggleThemeAction } from "../../features/themeList";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
        <StyledNavLink to="/404">Error</StyledNavLink>

        <StyledToggleBlock>
          <button onClick={() => dispatch(toggleThemeAction())}>Toggle</button>
        </StyledToggleBlock>
      </StyledContainer>
    </StyledHeader>
  );

}
