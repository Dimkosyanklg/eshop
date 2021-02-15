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

const Sidebar = (props) => (
  <SidebarContainer>
    <SidebarContent>
      <SortHeader>Производители</SortHeader>
      <ButtonsContainer>
        <CreateButtons
          goodsItem={props.goodsItem}
          getFilterData={props.getFilterData}
        />
      </ButtonsContainer>
    </SidebarContent>
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
const ButtonsContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const SortHeader = styled.div`
  font-weight: 600;
`;

export default Sidebar;
