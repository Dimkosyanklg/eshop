import React from "react";
import styled from "styled-components";

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

  a {
    text-decoration: none;
    color: royalblue;
  }

  &:hover {
    box-shadow: 0 0 5px gray;
  }
`;
const GoodsItemImage = styled.div`
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const GoodsItemName = styled.div`
  height: 20%;
  font-size: 16px;

  @media screen and (max-width: 1025px) {
    font-size: 10px;
  }

  @media screen and (max-width: 810px) {
    font-size: 8px;
  }
`;
const GoodsItemPrice = styled.div`
  height: 10%;
  color: rgb(255, 0, 0);
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width: 1025px) {
    font-size: 14px;
  }

  @media screen and (max-width: 810px) {
    font-size: 12px;
  }
`;

const Catalog = ({ goodsItem }) => (
  <GoodsContainer>
    {goodsItem.map(({ name, price, imgSrc }) => (
      <GoodsItem key={name}>
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
);

export default Catalog;
