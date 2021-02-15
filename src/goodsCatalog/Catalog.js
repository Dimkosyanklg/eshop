import React from "react";
import styled from "styled-components";

class Catalog extends React.Component {
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
    } else {
      // Массив выбранных кнопок
      let checkedFirms = this.props.firms.filter((item) => {
        if (item.checked) {
          return item;
        }
      });
      // Массив отсортированных товаров для рендера
      this.setState({
        filteredGoodsItem: this.props.goodsItem.filter((item) => {
          for (let i = 0; i < checkedFirms.length; i++) {
            if (item.firm === checkedFirms[i].label) {
              return item;
            }
          }
        }),
      });
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.firms !== prevProps.firms) {
      this.filterFirm();
    }
  }
  render() {
    return (
      <GoodsContainer>
        {this.state.filteredGoodsItem.map(({ id, name, imgSrc, price }) => (
          <GoodsItem key={id}>
            <GoodsItemImage>
              <img src={imgSrc} alt="" />
            </GoodsItemImage>
            <GoodsItemName>
              <a href="">{name}</a>
            </GoodsItemName>
            <PRICE_PLUS_TOBASKET>
              <GoodsItemPrice>{price}</GoodsItemPrice>
              <ToBasket>В корзину</ToBasket>
            </PRICE_PLUS_TOBASKET>
          </GoodsItem>
        ))}
      </GoodsContainer>
    );
  }
}

const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 75%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
const GoodsItem = styled.div`
  width: 24%;
  height: auto;
  max-height: 15vw;
  text-align: left;
  border: 1px solid rgba(128, 128, 128, 0.096);
  border-radius: 5px;
  margin-bottom: 1%;
  margin-left: 1%;
  box-sizing: border-box;
  font-size: 1vw;

  a {
    text-decoration: none;
    color: royalblue;
  }

  &:hover {
    box-shadow: 0 0 10px gray;
  }
`;
const GoodsItemImage = styled.div`
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const GoodsItemName = styled.div`
  height: 16%;
  margin-top: 4%;
  font-size: 0.8em;
`;
const GoodsItemPrice = styled.div`
  width: 67%;
  height: 10%;
  color: rgb(237, 20, 20);
  font-weight: 900;
  font-size: 1.1em;
`;
const ToBasket = styled.div`
  width: 30%;
  margin-right: 3%;
  font-size: 0.7em;
  border: solid 2px red;
  border-radius: 3px;
  background-color: red;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;

  ${GoodsItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
const PRICE_PLUS_TOBASKET = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Catalog;
