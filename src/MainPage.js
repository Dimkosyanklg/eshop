import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin:0;
}
`;

const MainContent = styled.div`
  height: 500px;
  margin: 20px 15% 0 15%;
`;

const MainPage = () => [
  <GlobalStyle key="globalStyle" />,
  <Header key="navbar" />,
  <MainContent key="main-content">ТУТ ВСЯКАЯ ЗАЛЕПА</MainContent>,
  <Footer key="footer" />,
];

export default MainPage;
