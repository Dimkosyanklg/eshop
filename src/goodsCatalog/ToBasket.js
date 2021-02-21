import React from "react";
import styled from "styled-components";

class ToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: "outside" };
  }

  deleteFromBasket = () => {
    this.setState({ status: "outside" });
  };
  sendToBasket = () => {
    this.props.getBasketData(this.props.goodsItem);
    this.setState({ status: "inside" });
  };

  render() {
    if (this.state.status === "outside") {
      return (
        <ToBasketButton onClick={() => this.sendToBasket()}>
          В корзину
        </ToBasketButton>
      );
    } else {
      return (
        <DeleteFromBasketButton onClick={() => this.deleteFromBasket()}>
          Убрать
        </DeleteFromBasketButton>
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

const DeleteFromBasketButton = styled.div`
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
