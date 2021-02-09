import React from "react";
import styled from "styled-components";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filteredGoodsItem: [] };
  }
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
  filter = () => {
    if (this.checkedTest(this.props.firms)) {
      this.setState({ filteredGoodsItem: this.props.goodsItem });
    } else {
      let checkedFirms = this.props.firms.filter((item) => {
        if (item.checked) {
          return item;
        }
      });
      this.setState({
        filteredGoodsItem: this.props.goodsItem.filter((item) => {
          let splitName = item.name.split(" ");
          for (let i = 0; i < checkedFirms.length; i++) {
            if (splitName[0] === checkedFirms[i].label) {
              return item;
            }
          }
        }),
      });
    }
  };
  componentDidUpdate(prevProps){
    if (this.props.firms != prevProps.firms) {
      this.filter();
    }
  }
  render(){
    return(
      <GoodsContainer>
       {this.state.filteredGoodsItem.map(({ id, name, imgSrc, price }) => (
        <GoodsItem key={id}>
          <GoodsItemImage>
            <img src={imgSrc} alt="" />
          </GoodsItemImage>
          <GoodsItemName>
            <a href="">{name}</a>
          </GoodsItemName>
          <GoodsItemPrice>{price}</GoodsItemPrice>
        </GoodsItem>
      ))}
    </GoodsContainer>
    )
  }
}

const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  width: 75%;
`;
const GoodsItem = styled.div`
  width: 24%;
  height: auto;
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
    box-shadow: 0 0 5px gray;
  }
`;
const GoodsItemImage = styled.div`
  height: 60%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const GoodsItemName = styled.div`
  height: 20%;
  font-size: 0.8em;
`;
const GoodsItemPrice = styled.div`
  height: 20%;
  color: rgb(237, 20, 20);
  font-weight: 900;
  font-size: 1.1em;
`;

export default Catalog;
