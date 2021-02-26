import React from "react";
import styled from "styled-components";
import QuantityButton from "./QuantityButton.js";

class PriceQuantitySum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }
  // Получает количество товара для Sum
  getQuantity = (value) => {
    this.setState({ quantity: value });
  };

  render() {
    return [
      <Price key="price">{`${this.props.price} ₽`}</Price>,
      <Quantity key="quantity">
        <QuantityButton getQuantity={this.getQuantity}></QuantityButton>
      </Quantity>,
      <Sum key="sum">{`${this.props.price * this.state.quantity} ₽`}</Sum>,
    ];
  }
}

const Price = styled.div`
  width: 15%;
  text-align: center;
  font-size: 1.4em;
`;

const Quantity = styled.div`
  width: 15%;
  text-align: center;
`;

const Sum = styled.div`
  width: 20%;
  text-align: center;
  font-size: 1.4em;
`;

export default PriceQuantitySum;
