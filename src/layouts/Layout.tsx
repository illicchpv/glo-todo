import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Layout = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Главная | ToDo List App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" crossOrigin="anonymous" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Header />
      <Outlet />
    </HelmetProvider>
  );
};