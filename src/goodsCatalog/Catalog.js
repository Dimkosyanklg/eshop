import React from "react";
import CatalogRender from "./CatalogRender.js";
import CatalogSortRender from "./CatalogSortRender.js";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isEmptyObj = (obj) => {
    for (let key in obj) {
      return true;
    }
    return false;
  };

  // checkedTest = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].checked === false || arr[i] === undefined) {
  //       continue;
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // filterFirm = () => {
  //   if (this.checkedTest(this.props.firms)) {
  //     this.setState({ filteredGoodsItem: this.props.goodsItem });
  //   } else {
  //     let checkedFirms = this.props.firms.filter((item) => {
  //       if (item.checked) {
  //         return item;
  //       }
  //     });
  //     this.setState({
  //       filteredGoodsItem: this.props.goodsItem.filter((item) => {
  //         for (let i = 0; i < checkedFirms.length; i++) {
  //           if (item.firm === checkedFirms[i].label) {
  //             return item;
  //           }
  //         }
  //       }),
  //     });
  //   }
  // };
  // componentDidUpdate(prevProps) {
  //   if (this.props.firms !== prevProps.firms) {
  //     this.filterFirm();
  //   }
  // }
  render() {
    return <div>123{console.log(this.state)}</div>;
    // console.log(this.props.sortParam);
    // if (this.isEmptyObj(this.props.sortParam)) {
    //   return <CatalogRender goodsItem={this.props.goodsItem} />;
    // } else {
    //   return (
    //     <CatalogSortRender
    //       goodsItem={this.props.goodsItem}
    //       sortParam={this.props.sortParam}
    //       isEmptyObj={this.isEmptyObj}
    //     />
    //   );
    // }
  }
}

export default Catalog;
