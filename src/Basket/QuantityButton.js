import React from "react";
import styled from "styled-components";

class QuantityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, quantity: 1, quantityClicked: 1 };
  }

  /* Передают родителю количество товара для подсчета суммы */
  componentDidMount() {
    this.props.getQuantity(this.state.quantity);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.quantity !== this.state.quantity) {
      this.props.getQuantity(this.state.quantity);
    }
  }
  /*                                        */

  render() {
    /* Обработка изменения количества товара */
    if (this.state.clicked) {
      return (
        <ClickedContainer>
          <ButtonCounterContainer>
            <Counter
              onClick={(e) => {
                if (this.state.quantityClicked > 1) {
                  this.setState({
                    quantityClicked: this.state.quantityClicked - 1,
                  });
                }
              }}
            >
              —
            </Counter>
            <ClickedButtonContainer>
              <ClickedButton>{this.state.quantityClicked}</ClickedButton>
            </ClickedButtonContainer>
            <Counter
              onClick={(e) =>
                this.setState({
                  quantityClicked: this.state.quantityClicked + 1,
                })
              }
            >
              +
            </Counter>
          </ButtonCounterContainer>
          <SaveCancelContainer>
            <SaveButton
              onClick={(e) =>
                this.setState({
                  clicked: false,
                  quantity: this.state.quantityClicked,
                })
              }
            >
              Сохранить
            </SaveButton>
            <CancelButton
              onClick={(e) =>
                this.setState({
                  clicked: false,
                  quantityClicked: this.state.quantity,
                })
              }
            >
              Отменить
            </CancelButton>
          </SaveCancelContainer>
        </ClickedContainer>
      );
      /*---------------------------------------------------*/
    } else {
      return (
        <Container>
          <Button onClick={(e) => this.setState({ clicked: true })}>
            {this.state.quantity}
          </Button>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  width: 100%;
  height: 40%;
`;

const Button = styled.button`
  width: 33%;
  height: 40%;
  font-size: 0.9em;
  outline: 0;
  cursor: pointer;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: #fafafa;
`;

const ClickedContainer = styled.div`
  width: 100%;
  height: 40%;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.2);
`;

const ClickedButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 0.9em;
  outline: 0;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: #fafafa;
`;

const Counter = styled.div`
  width: 20%;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
`;

const ClickedButtonContainer = styled.div`
  width: 33%;
`;

const ButtonCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40%;
`;

const SaveCancelContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const SaveButton = styled.div`
  width: 40%;
  margin-bottom: 2%;
  font-size: 0.7em;
  border: solid 2px red;
  border-radius: 3px;
  background-color: red;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
`;

const CancelButton = styled.div`
  width: 40%;
  margin-bottom: 2%;
  font-size: 0.7em;
  border: solid 2px rgb(227, 227, 227);
  border-radius: 3px;
  background-color: rgb(227, 227, 227);
  color: rgb(80, 80, 80);
  text-align: center;
  cursor: pointer;
`;

export default QuantityButton;
