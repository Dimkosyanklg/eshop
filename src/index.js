import React from "react";
import ReactDOM from "react-dom";
import PageRender from "./PageRender.js";
import MainPage from "./MainPage.js";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/sport" component={PageRender} />
  </BrowserRouter>,
  document.getElementById("root")
);
