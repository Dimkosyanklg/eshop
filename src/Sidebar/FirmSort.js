import React from "react";
import styled from "styled-components";

class FirmSort extends React.Component {
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.getSortData(this.state.firmsArray, "firm");
    }
  }
  render() {
    return (
      <FirmSortBlock>
        {" "}
        {this.state.firmsArray.map(({ label, id, checked }) => (
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
        ))}{" "}
      </FirmSortBlock>
    );
  }
}

const FirmSortBlock = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default FirmSort;
