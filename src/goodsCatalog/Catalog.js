import React from "react";
import CatalogRender from "./CatalogRender.js";
import CatalogSortRender from "./CatalogSortRender.js";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filteredGoodsItem: [] };
  }

  checkedTest = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked === false || arr[i] === undefined) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };


  filterFirm = () => {
    if (this.checkedTest(this.props.firms)) {
      this.setState({ filteredGoodsItem: this.props.goodsItem });
    }};
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
