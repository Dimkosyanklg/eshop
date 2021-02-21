import React from "react";
import styled from "styled-components";
import ToBasket from "./ToBasket.js";

const CatalogRender = (props) => (
  <GoodsContainer>
    {props.goodsItem.map(({ id, name, imgSrc, price }) => (
      <GoodsItem key={id}>
        <GoodsItemImage>
          <img src={imgSrc} alt="" />
        </GoodsItemImage>
        <GoodsItemName>
          <a href="">{name}</a>
        </GoodsItemName>
        <PRICE_PLUS_TOBASKET>
          <GoodsItemPrice>{`${price} ₽`}</GoodsItemPrice>
          <ToBasketContainer>
            <ToBasket
              goodsItem={{ id, name, imgSrc, price }}
              getBasketData={props.getBasketData}
            />
          </ToBasketContainer>
        </PRICE_PLUS_TOBASKET>
      </GoodsItem>
    ))}
  </GoodsContainer>
);

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
  -webkit-box-sizing: border-box;
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
  font-weight: 600;
  font-size: 1.1em;
`;
const ToBasketContainer = styled.div`
  width: 30%;
  margin-right: 3%;

  ${GoodsItem}:hover & > * {
    visibility: visible;
    opacity: 1;
  }
`;
const PRICE_PLUS_TOBASKET = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default CatalogRender;
