import React from "react";
import styled from "styled-components";
import BasketRender from "./BasketRender.js";
import { AppContext } from "../AppContext.js";

/* Функция для падежа существительного в зависимости от числа */
function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
/* ------------------------------------------------------------- */

class BasketBody extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <BasketContent>
        {/* Верхушка с названиями-------------------------------------------------*/}
        <BasketHead>
          Корзина ({this.context.basket.length}{" "}
          {getNoun(this.context.basket.length, "товар", "товара", "товаров")})
        </BasketHead>
        <ItemsHead>
          <Item>Товар</Item>
          <Receiving>Способ получения</Receiving>
          <Price>Цена</Price>
          <Quantity>Количество</Quantity>
          <Sum>Сумма</Sum>
        </ItemsHead>
        {/* Контент корзины-------------------------------------------------------*/}
        <BasketRender></BasketRender>
      </BasketContent>
    );
  }
}

const BasketContent = styled.div`
  margin: 0 15% 0 15%;
  font-family: "Roboto", sans-serif;
  font-size: 1vw;
  min-height: 50vw;
  height: auto;
`;

const BasketHead = styled.div`
  font-size: 2em;
  border-bottom: 1px solid #e4e4e4;
`;

const ItemsHead = styled.div`
  display: flex;
  font-size: 1em;
  margin-top: 20px;
  background-color: #f5f5f5;
`;

const Item = styled.div`
  width: 23%;
  padding-left: 2%;
`;

const Receiving = styled.div`
  width: 25%;
`;

const Price = styled.div`
  width: 15%;
  text-align: center;
`;

const Quantity = styled.div`
  width: 15%;
  text-align: center;
`;

const Sum = styled.div`
  width: 20%;
  text-align: center;
`;

export default BasketBody;
