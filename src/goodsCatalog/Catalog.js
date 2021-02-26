import React from "react";
import CatalogRender from "./CatalogRender.js";
import CatalogSortRender from "./CatalogSortRender.js";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { basket: [] };
  }

  render() {
    /* Если нет никаких параметров сортировки, то рендер всех товаров */
    if (
      this.props.sortParam.firm.length === 0 &&
      this.props.sortParam.price.length === 0
    ) {
      return <CatalogRender goodsItem={this.props.goodsItem} />;
    } else {
      /* Рендер с сортировкой */
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
