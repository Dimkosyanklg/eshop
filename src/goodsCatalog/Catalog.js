import React from "react";
import CatalogRender from "./CatalogRender.js";
import CatalogSortRender from "./CatalogSortRender.js";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { basket: [] };
  }

  getBasketData = (value) => {
    this.setState({ basket: this.state.basket.push(value) });
    console.log(this.state.basket);
  };

  render() {
    sessionStorage.basket = [];
    if (
      this.props.sortParam.firm.length === 0 &&
      this.props.sortParam.price.length === 0
    ) {
      return (
        <CatalogRender
          goodsItem={this.props.goodsItem}
          getBasketData={this.getBasketData}
        />
      );
    } else {
      return (
        <CatalogSortRender
          goodsItem={this.props.goodsItem}
          sortParam={this.props.sortParam}
          getBasketData={this.getBasketData}
        />
      );
    }
  }
}

export default Catalog;
