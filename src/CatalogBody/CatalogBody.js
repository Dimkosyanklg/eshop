import React from "react";
import styled from "styled-components";
import Catalog from "../goodsCatalog/Catalog.js";
import Sidebar from "../Sidebar/Sidebar.js";
import { catalogSoccerBalls } from "../goodsCatalog/catalogSoccerBalls.js";

const PageContent = styled.div`
  position: relative;
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
        <Catalog goodsItem={catalogSoccerBalls} firms={this.state.firms} />
        <Sidebar
          goodsItem={catalogSoccerBalls}
          getFilterData={this.getFilterData}
        />
      </PageContent>
    );
  }
}

export default CatalogBody;
