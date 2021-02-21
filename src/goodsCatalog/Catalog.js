import React from "react";
import CatalogRender from "./CatalogRender.js";
import CatalogSortRender from "./CatalogSortRender.js";

class Catalog extends React.Component {

  render() {
    if (
      this.props.sortParam.firm.length === 0 &&
      this.props.sortParam.price.length === 0
    ) {
      return <CatalogRender goodsItem={this.props.goodsItem} />;
    } else {
      return (
        <CatalogSortRender
          goodsItem={this.props.goodsItem}
          sortParam={this.props.sortParam}
        />
      );
    }
  }
}

export default Catalog;
