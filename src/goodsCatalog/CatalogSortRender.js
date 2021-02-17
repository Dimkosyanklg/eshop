import React from "react";
import styled from "styled-components";

const CatalogSortRender = (props) => {
    let catalog = [];
    if (props.isEmptyObj(props.sortParam.firm)){
        let firmSort = props.sortParam.firm
    }
};

export default CatalogSortRender;
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