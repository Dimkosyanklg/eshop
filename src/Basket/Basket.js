import React from "react";
import Header from "../Header/Header.js";
import BasketBody from "./BasketBody.js";
import Footer from "../Footer/Footer.js";

const Basket = () => [
  <Header key="header" />,
  <BasketBody key="basket-body" />,
  <Footer key="footer" />,
];

export default Basket;
