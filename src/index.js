import React from "react";
import ReactDOM from "react-dom";
import PageRender from "./PageRender.js";
import MainPage from "./MainPage.js";
import Basket from "./Basket/Basket.js";
import { catalogSoccerBalls } from "./goodsCatalog/catalogSoccerBalls.js";
import { catalogBackpacks } from "./goodsCatalog/catalogBackpacks.js";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route
      exact
      path="/sport"
      render={() => <PageRender goodsItem={catalogSoccerBalls} />}
    />
    <Route
      exact
      path="/tourism"
      render={() => <PageRender goodsItem={catalogBackpacks} />}
    />
    <Route exact path="/basket" component={Basket} />
  </BrowserRouter>,
  document.getElementById("root")
);
