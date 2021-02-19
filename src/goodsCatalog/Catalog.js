import React from "react";
import CatalogRender from "./CatalogRender.js";
import CatalogSortRender from "./CatalogSortRender.js";

class Catalog extends React.Component {
<<<<<<< HEAD
<<<<<<< Updated upstream
  constructor(props) {
    super(props);
    this.state = { filteredGoodsItem: [] };
  }

  /* Метод для проверки кнопок сортировки */
  /* Если ни одна кнопка не нажата - вернет true */
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

  /* Метод возвращает остортированный массив товаров */
  filterFirm = () => {
    if (this.checkedTest(this.props.firms)) {
      // Если кнопки не нажаты, то рендерятся все товары
      this.setState({ filteredGoodsItem: this.props.goodsItem });
=======
=======
>>>>>>> 781d096b9a4ec9de5029d851076ddfbd3e5f5500
  render() {
    if (
      this.props.sortParam.firm.length === 0 &&
      this.props.sortParam.price.length === 0
    ) {
      return <CatalogRender goodsItem={this.props.goodsItem} />;
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
    
>>>>>>> 781d096b9a4ec9de5029d851076ddfbd3e5f5500
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
