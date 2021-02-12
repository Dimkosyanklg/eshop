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
  /* Перезаписывает state при нажатии на конпку */
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
  <SidebarContent>
    <ButtonsContainer>
      <CreateButtons
        goodsItem={props.goodsItem}
        getFilterData={props.getFilterData}
      />
    </ButtonsContainer>
  </SidebarContent>
);

const SidebarContent = styled.div`
  background-color: rgb(250, 234, 204);
  width: 20%;
  height: 35vw;
  margin-left: 2%;
  box-sizing: border-box;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Sidebar;
