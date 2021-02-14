import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => (
  <HeaderBody>
    <HeaderContainer>
      <HeaderContent>
        <a href="http://github.com/Dimkosyanklg">
          <i className="fab fa-github"></i>
        </a>
        <SearchBar>
          <form>
            <input type="search" />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </SearchBar>
        <HeaderIcons>
          <i className="fas fa-map-marker-alt"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
        </HeaderIcons>
      </HeaderContent>
    </HeaderContainer>
    <Navigation>
      <MenuMain>
        <MenuItem>
          <Link to="/gadget">Гаджеты</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/computer">Компьютеры</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/photo">Фото</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/tv">TV</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/audio">Аудио</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/house-appliances">Бытовая техника</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/climate">Климат</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/house">Дом</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/for-children">Детские товары</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/car">Авто</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/tools">Инструмент</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/tourism">Туризм</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sport">Спорт</Link>
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
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;

  a {
    width: 10%;
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
const HeaderIcons = styled.div`
  width: 20%;
  color: rgb(212, 212, 212);
  display: flex;
  justify-content: space-around;
`;
const SearchBar = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;

  form {
    height: 65%;
    width: 100%;
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
`;
export default Header;
