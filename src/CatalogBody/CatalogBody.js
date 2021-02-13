import React from "react";
import styled from "styled-components";
import Catalog from "../goodsCatalog/Catalog.js";
import Sidebar from "../Sidebar/Sidebar.js";

const PageContent = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 20px 15% 0 15%;
`;

/* Класс CatalogBody рендерит тело страницы с каталогом */
class CatalogBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {//this.state.firms передается в Catalog для сортировки
      firms: [], // компонент Sidebar установит this.state.firms
    };
  }
  
  /* Метод для получения фирм товаров из компонента Sidebar */
  getFilterData = (value) => {
    this.setState({firms: value})
  };
  
  render() {
    return (
      <PageContent>
        <Catalog goodsItem={this.props.goodsItem} firms={this.state.firms} />
        <Sidebar
          goodsItem={this.props.goodsItem}
          getFilterData={this.getFilterData}
        />
      </PageContent>
    );
  }
}

export default CatalogBody;
