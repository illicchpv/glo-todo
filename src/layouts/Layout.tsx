import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);
  // console.log('theme: ', theme);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Главная | ToDo List App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" crossOrigin="anonymous" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </HelmetProvider>
  );
};