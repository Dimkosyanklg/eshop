import React from "react";
import styled from "styled-components";

class CreateButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firmsArray: Array.from(
        new Set(
          this.props.goodsItem.map((item) => {
            let splitName = item.name.split(" ");
            return splitName[0];
          })
        )
      ).map((firm, index) => ({ label: firm, id: index, checked: false })),
    };
  }
  checkboxHandler = (e, currentId) => {
    this.setState({
      firmsArray: this.state.firmsArray.map(({ label, id, checked }) =>
        currentId === id
          ? { label, id, checked: !checked }
          : { label, id, checked }
      ),
    });
  };
  componentDidMount(){
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
  position: absolute;
  right: 0;
  top: 0;
  width: 20%;
  height: 35vw;
  box-sizing: border-box;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Sidebar;
