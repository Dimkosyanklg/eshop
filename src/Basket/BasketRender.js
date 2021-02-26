import React from "react";
import styled from "styled-components";
import PriceQuantitySum from "./PriceQuantitySum.js";
import { AppContext } from "../AppContext.js";

class BasketRender extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <ItemsBody>
        {this.context.basket.map(({ id, name, price, imgSrc }) => (
          <ItemContainer key={id}>
            <Item>
              <ItemImage>
                <img src={imgSrc} alt="" />
              </ItemImage>
              <ItemDescription>{name}</ItemDescription>
            </Item>
            <Receiving>
              <form>
                <RadioBlock>
                  <label>
                    <input type="radio" name="receive" defaultChecked />
                    Самовывоз
                  </label>
                  <label>
                    <input type="radio" name="receive" />
                    Доставка курьером или в пункт выдачи заказов
                  </label>
                </RadioBlock>
              </form>
            </Receiving>
            <PriceQuantitySum price={price}></PriceQuantitySum>
          </ItemContainer>
        ))}
      </ItemsBody>
    );
  }
}

const ItemsBody = styled.div`
  margin-top: 20px;
  width: 100%;
  font-size: 0.9em;
`;

const ItemContainer = styled.div`
  display: flex;
  height: 8vw;
  margin-top: 2vw;
  border-bottom: 1px solid #e4e4e4;
`;

const Item = styled.div`
  width: 25%;
  display: flex;
`;

const ItemImage = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ItemDescription = styled.div`
  width: 60%;
  height: 90%;
  margin: 5% 0 5% 0;
`;

const Receiving = styled.div`
  width: 25%;
  form {
    height: 100%;
  }
  label {
    display: block;
  }
`;

const RadioBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default BasketRender;
