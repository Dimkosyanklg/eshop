import React from "react";
import styled from "styled-components";
import FirmSort from "./FirmSort.js";
import PriceSort from "./PriceSort.js";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firm: [], price: [] };
  }

  getSortData = (value, sortParam) => {
    this.setState({ [sortParam]: value });
  };

  componentDidMount() {
    this.props.getFilterData(true, this.state);
  }

  render() {
    return (
      <SidebarContainer>
        <SidebarContent>
          <SortBlock>
            <SortHeader>Производители</SortHeader>
            <FirmSort
              goodsItem={this.props.goodsItem}
              getSortData={this.getSortData}
            />
          </SortBlock>
          <SortBlock>
            <SortHeader>Цена</SortHeader>
            <PriceSort
              goodsItem={this.props.goodsItem}
              getSortData={this.getSortData}
            />
          </SortBlock>
        </SidebarContent>
        <FindButton onClick={(e) => this.props.getFilterData(e, this.state)}>
          Подобрать
        </FindButton>
      </SidebarContainer>
    );
  }
}

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
const SortBlock = styled.div`
  margin-bottom: 5%;
`;
const FindButton = styled.button`
  height: 5%;
  width: 90%;
  margin: 5% 5%;
  border: 1px solid gray;
  border-radius: 4px;
  background: linear-gradient(to top right, #dedede, #f5f5f5);
`;
const SortHeader = styled.div`
  font-weight: 600;
`;

export default Sidebar;
