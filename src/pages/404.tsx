import { NavLink } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ThemeProvider } from "styled-components";
import { NavLinkButton } from "../components/NavLinkButton/NavLinkButton";

export const NotFoundPage = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="container">
          <h1>404 - NotFound 🐞</h1>
          {/* <NavLink to="/">To Home</NavLink> */}
          <NavLinkButton to="/">☝️ To Home</NavLinkButton>
        </div>
      </ThemeProvider>
    </>
  )
};