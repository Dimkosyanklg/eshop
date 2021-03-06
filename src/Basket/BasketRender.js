import React from "react";
import styled from "styled-components";
import PriceQuantitySum from "./PriceQuantitySum.js";
import { AppContext } from "../AppContext.js";

class BasketRender extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <ItemsBody>
        {this.context.basket.map((item) => (
          <ItemContainer key={item.name}>
            <Item>
              <ItemImage>
                <img src={item.imgSrc} alt="" />
              </ItemImage>
              <ItemDescription>{item.name}</ItemDescription>
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
            {/* Объединил Price, Quantity и Sum для того, чтобы сумму считать */}
            <PriceQuantitySum price={item.price}></PriceQuantitySum>
            <RemoveButton
              onClick={(e) => {
                this.context.removeFromContext(item);
              }}
            >
              Убрать из корзины
            </RemoveButton>
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
  flex-wrap: wrap;
  height: 9vw;
  margin-top: 2vw;
  border-bottom: 1px dashed #e4e4e4;
`;

const Item = styled.div`
  height: 85%;
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
  height: 85%;
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

const RemoveButton = styled.div`
  height: 15%;
  font-size: 0.8em;
  text-decoration: underline;
  cursor: pointer;
  color: #005baa;
`;

export default BasketRender;
