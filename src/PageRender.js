import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header/Header.js";
import PageBody from "./PageBody/PageBody.js";
import Footer from "./Footer/Footer.js";

const GlobalStyle = createGlobalStyle`
body {
    margin:0;
}
`;

const PageRender = () => [
  <GlobalStyle key="globalStyle" />,
  <Header key="navbar" />,
  <PageBody key="pageBody" />,
  <Footer key="footer" />,
];

export default PageRender;
