import React from "react";
import styled from "styled-components";
import Catalog from "../goodsCatalog/Catalog.js";
import Sidebar from "../Sidebar/Sidebar.js";
import { catalogSoccerBalls } from "../goodsCatalog/catalogSoccerBalls.js";
import { catalogBackpacks } from "../goodsCatalog/catalogBackpacks.js";

const PageContent = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 20px 15% 0 15%;
`;
class CatalogBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firms: [],
    };
  }
  getFilterData = (value) => {
    this.setState({firms: value})
  };
  
  render() {
    return (
      <PageContent>
        <Catalog goodsItem={catalogBackpacks} firms={this.state.firms} />
        <Sidebar
          goodsItem={catalogBackpacks}
          getFilterData={this.getFilterData}
        />
      </PageContent>
    );
  }
}

export default CatalogBody;
