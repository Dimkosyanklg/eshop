import React from "react";
import styled from "styled-components";
import Catalog from "../goodsCatalog/Catalog.js";
import Sidebar from "../Sidebar/Sidebar.js";
import { catalogSoccerBalls } from "../goodsCatalog/catalogSoccerBalls.js";

const PageContent = styled.div`
  position: relative;
  margin: 20px 15% 0 15%;
`;
const PageBody = () => (
  <PageContent>
    <Catalog goodsItem={catalogSoccerBalls} />
    <Sidebar />
  </PageContent>
);

export default PageBody;
