import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header/Header.js";
import CatalogBody from "./CatalogBody/CatalogBody.js";
import Footer from "./Footer/Footer.js";

const GlobalStyle = createGlobalStyle`
body {
    margin:0;
}
`;

const PageRender = () => [
  <GlobalStyle key="globalStyle" />,
  <Header key="navbar" />,
  <CatalogBody key="catalogBody" />,
  <Footer key="footer" />,
];

export default PageRender;
