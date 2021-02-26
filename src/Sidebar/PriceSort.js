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

  idPriceSorted = () => {
    let sorted = [];
    if (this.state.fromValue === "" || this.state.toValue === "") {
      /*                                                              */
      if (this.state.fromValue === "") {
        sorted = this.props.goodsItem.filter((item) => {
          return item.price <= this.state.toValue;
        });
        sorted = sorted.length === 0 ? ["no_match"] : sorted;
      }
      /*                                                                    */
      if (this.state.toValue === "") {
        sorted = this.props.goodsItem.filter((item) => {
          return item.price >= this.state.fromValue;
        });
        sorted = sorted.length === 0 ? ["no_match"] : sorted;
      }
      /*                                                                       */
      if (this.state.fromValue === "" && this.state.toValue === "") {
        sorted = [];
      }
      /*                                                                        */
    } else {
      sorted = this.props.goodsItem.filter((item) => {
        return (
          item.price >= this.state.fromValue && item.price <= this.state.toValue
        );
      });
      sorted = sorted.length === 0 ? ["no_match"] : sorted;
    }
    sorted = sorted[0] === "no_match" ? sorted : sorted.map((item) => item.id);
    this.props.getSortData(sorted, "price");
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.idPriceSorted();
    }
  }

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
          onChange={(e)=>this.changeHandlerTo(e)}
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
