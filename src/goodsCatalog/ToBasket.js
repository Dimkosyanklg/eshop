import React from "react";
import styled from "styled-components";
import { findIndex } from "lodash";
import { AppContext } from "../AppContext.js";

class ToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: "outside", label: "В корзину" };
  }

  static contextType = AppContext;

  /* Проверка на нахождение в корзине */
  componentDidMount() {
    if (findIndex(this.context.basket, this.props.goodsItem) > -1) {
      this.setState({ label: "Убрать", status: "inside" });
    }
  }
  /* -------------------------------- */

  render() {
    if (this.state.status === "outside") {
      return (
        /* Кнопка "В корзину" */
        <ToBasketButton
          onClick={() => {
            this.context.addToContext(this.props.goodsItem);
            this.setState({ status: "inside", label: "Убрать" });
          }}
        >
          {this.state.label}
        </ToBasketButton>
      );
    } else {
      return (
        /* Кнопка "Убрать" */
        <RemoveFromBasketButton
          onClick={() => {
            this.context.removeFromContext(this.props.goodsItem);
            this.setState({ status: "outside", label: "В корзину" });
          }}
        >
          {this.state.label}
        </RemoveFromBasketButton>
      );
    }
  }
}

const ToBasketButton = styled.div`
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
`;

const RemoveFromBasketButton = styled.div`
  font-size: 0.7em;
  border: solid 2px rgb(227, 227, 227);
  border-radius: 3px;
  background-color: rgb(227, 227, 227);
  color: rgb(80, 80, 80);
  text-align: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
`;

export default ToBasket;
