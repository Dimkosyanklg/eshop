import React from "react";
import styled from "styled-components";

class ToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: "В корзину", status: "outside" };
  }

  sendToBasket = () => {
    console.log(sessionStorage);
  };

  render() {
    return (
      <ToBasketButton onClick={() => this.sendToBasket()}>
        {this.state.label}
      </ToBasketButton>
    );
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

export default ToBasket;
