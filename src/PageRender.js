import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header/Header.js";
import CatalogBody from "./CatalogBody/CatalogBody.js";
import Footer from "./Footer/Footer.js";

//Margin = 0 для body
const GlobalStyle = createGlobalStyle`
body {
    margin:0;
}
`;

//Компонент PageRender для отрисовки полной страницы
const PageRender = (props) => [
  <GlobalStyle key="globalStyle" />,
  <Header key="navbar" />,
  <CatalogBody key="catalogBody" goodsItem={props.goodsItem}/>,
  <Footer key="footer" />,
];

export default PageRender;
