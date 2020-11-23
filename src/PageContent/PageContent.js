import React from "react";
import Catalog from "../goodsCatalog/Catalog.js";
import Sidebar from "../Sidebar/Sidebar.js";
import {catalogSoccerBalls} from "../goodsCatalog/catalogSoccerBalls.js";
import "./PageContent.css";

const PageContent = () => (
    <div className="page-content">
        <Catalog key="catalog" goodsItem={catalogSoccerBalls}  />
        <Sidebar key="sidebar" />
    </div>
);

export default PageContent;