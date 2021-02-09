import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderBody>
    <HeaderContainer>
      <HeaderContent>
        <a href="http://github.com/Dimkosyanklg">
          <i className="fab fa-github"></i>
        </a>
        <form>
          <input type="search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <i className="fas fa-map-marker-alt"></i>
        <i className="fas fa-user"></i>
      </HeaderContent>
    </HeaderContainer>
    <Navigation>
      <MenuMain>
        <MenuItem>
          <a href="/gadget">Гаджеты</a>
        </MenuItem>
        <MenuItem>
          <a href="/computer">Компьютеры</a>
        </MenuItem>
        <MenuItem>
          <a href="/photo">Фото</a>
        </MenuItem>
        <MenuItem>
          <a href="/tv">TV</a>
        </MenuItem>
        <MenuItem>
          <a href="/audio">Аудио</a>
        </MenuItem>
        <MenuItem>
          <a href="house-appliances">Бытовая техника</a>
        </MenuItem>
        <MenuItem>
          <a href="/climate">Климат</a>
        </MenuItem>
        <MenuItem>
          <a href="/house">Дом</a>
        </MenuItem>
        <MenuItem>
          <a href="/for-children">Детские товары</a>
        </MenuItem>
        <MenuItem>
          <a href="/car">Авто</a>
        </MenuItem>
        <MenuItem>
          <a href="/tools">Инструмент</a>
        </MenuItem>
        <MenuItem>
          <a href="/tourism">Туризм</a>
        </MenuItem>
        <MenuItem>
          <a href="/sport">Спорт</a>
        </MenuItem>
      </MenuMain>
    </Navigation>
  </HeaderBody>
);

const HeaderBody = styled.header`
  margin-top: 20px;
`;
const HeaderContainer = styled.div`
  background-color: royalblue;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;

  & > * {
    margin-left: 2%;
  }

  form {
    width: 60%;
    height: 65%;
  }

  form button {
    width: 7%;
    height: 100%;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  form input {
    width: 93%;
    height: 100%;
    padding-left: 10px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  .fab.fa-github {
    font-size: 50px;
    color: #000000;
  }
`;
const Navigation = styled.nav`
  height: auto;
`;
const MenuMain = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
`;
const MenuItem = styled.li`
  text-align: center;

  a {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: rgb(100, 100, 100);
    font-size: 0.8vw;
    font-weight: 600;
  }
`;
export default Header;
