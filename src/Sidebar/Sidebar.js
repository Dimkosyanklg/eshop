import React from "react";
import styled from "styled-components";

class CreateButtons extends React.Component {
  constructor(props) {
    super(props);
    // this.state.firmsArray - названия фирм для создания кнопок сортировки
    this.state = {
      firmsArray: Array.from(
        new Set(
          this.props.goodsItem.map((item) => {
            return item.firm;
          })
        )
      ).map((firm, index) => ({ label: firm, id: index, checked: false })),
    };
  }

  /* Метод для обработки нажатий на кнопки */
  /* Перезаписывает state при нажатии на кнопку */
  checkboxHandler = (e, currentId) => {
    this.setState({
      firmsArray: this.state.firmsArray.map(({ label, id, checked }) =>
        currentId === id
          ? { label, id, checked: !checked }
          : { label, id, checked }
      ),
    });
  };

  /* Передает this.state.firmsArray в родительский компонент */
  componentDidMount() {
    this.props.getFilterData(this.state.firmsArray);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.getFilterData(this.state.firmsArray);
    }
  }
  render() {
    return this.state.firmsArray.map(({ label, id, checked }) => (
      <div key={id}>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => this.checkboxHandler(e, id)}
          />
          {label}
        </label>
      </div>
    ));
  }
}

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

  test = () => {
    console.log(this.state);
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
        />
        {" "}до{" "}
        <input
          type="number"
          name="to"
          value={this.state.toValue}
          onChange={this.changeHandlerTo}
        />
        <button onClick={this.test} />
      </PriceSortBlock>
    );
  }
}

const Sidebar = (props) => (
  <SidebarContainer>
    <SidebarContent>
      <SortBlock>
        <SortHeader>Производители</SortHeader>
        <FirmSort>
          <CreateButtons
            goodsItem={props.goodsItem}
            getFilterData={props.getFilterData}
          />
        </FirmSort>
      </SortBlock>
      <SortBlock>
        <SortHeader>Цена</SortHeader>
        <PriceSortBlock>
          <PriceSort />
        </PriceSortBlock>
      </SortBlock>
    </SidebarContent>
    <FindButton>Подобрать</FindButton>
  </SidebarContainer>
);

const SidebarContainer = styled.div`
  background-color: rgb(250, 234, 204);
  width: 20%;
  height: 35vw;
  margin-left: 2%;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 0.9em;
`;
const SidebarContent = styled.div`
  width: 90%;
  margin: 5% 5%;
`;
const FirmSort = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const SortHeader = styled.div`
  font-weight: 600;
`;
const SortBlock = styled.div`
  margin-bottom: 5%;
`;
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
const FindButton = styled.button`
  height: 5%;
  width: 90%;
  margin: 5% 5%;
  border: 1px solid gray;
  border-radius: 4px;
  background: linear-gradient(to top right, #dedede, #f5f5f5);
`;

export default Sidebar;
