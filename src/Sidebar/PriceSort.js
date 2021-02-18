import React from "react";
import styled from "styled-components";

class PriceSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fromValue: "", toValue: "" };
  }

  changeHandlerTo = (e) => {
    this.setState({ toValue: e.target.value });
  };

  changeHandlerFrom = (e) => {
    this.setState({ fromValue: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.idPriceSorted();
    }
  }

  idPriceSorted = () => {
    let sorted = this.props.goodsItem.filter((item) => {
      let price = item.price.split(" ")[0];
      if (
        Number(price) >= Number(this.state.fromValue) &&
        Number(price) <= Number(this.state.toValue)
      ) {
        return item;
      }
    });
    sorted = sorted.map((item) => item.id);
    this.props.getSortData(sorted, "price");
    console.log(this.state)
  };

  render() {
    return (
      <PriceSortBlock>
        от{" "}
        <input
          type="number"
          name="from"
          value={this.state.fromValue}
          onChange={this.changeHandlerFrom}
        />{" "}
        до{" "}
        <input
          type="number"
          name="to"
          value={this.state.toValue}
          onChange={this.changeHandlerTo}
        />
      </PriceSortBlock>
    );
  }
}

const PriceSortBlock = styled.div`
  margin-top: 5%;

  input {
    width: 33%;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default PriceSort;
