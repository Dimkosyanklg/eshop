import React from "react";
import CatalogRender from "./CatalogRender.js";
import { intersection } from "lodash";

const CatalogSortRender = (props) => {
  let sortParam = [];
  let matched = [];
  let i = 0;
  for (let key in props.sortParam) {
    if (props.sortParam[key].length !== 0) {
      sortParam[i] = props.sortParam[key];
      i++;
    }
  }
  if (sortParam.length > 1) {
    for (let i = 0; i < sortParam.length - 1; i++) {
      matched = intersection(sortParam[i], sortParam[i + 1]);
    }
  } else {
    matched = sortParam[0];
  }
  let goodsItem = props.goodsItem.filter(
    (item) => matched.indexOf(item.id) > -1
  );
  return (
    <CatalogRender
      goodsItem={goodsItem}
      getBasketData={props.getBasketData}
    />
  );
};

export default CatalogSortRender;
