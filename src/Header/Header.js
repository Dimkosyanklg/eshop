import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

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
          <Link to="/basket">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </HeaderIcons>
      </HeaderContent>
    </HeaderContainer>
    <Navigation>
      <MenuMain>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/gadget">
            Гаджеты
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/computer">
            Компьютеры
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/photo">
            Фото
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/tv">
            TV
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/audio">
            Аудио
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/house-appliances">
            Бытовая техника
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/climate">
            Климат
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/house">
            Дом
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/for-children">
            Детские товары
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/car">
            Авто
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/tools">
            Инструмент
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/tourism">
            Туризм
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink activeStyle={{ color: "red" }} to="/sport">
            Спорт
          </NavLink>
        </MenuItem>
      </MenuMain>
    </Navigation>
  </HeaderBody>
);

const HeaderBody = styled.header`
  margin-top: 20px;
`;
const HeaderContainer = styled.div`
  background-color: #005aab;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vw;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;

  a {
    width: 10%;
  }

  .fab.fa-github {
    font-size: 4vw;
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
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: none;
    color: rgb(100, 100, 100);
    font-size: 0.8vw;
  }
`;
const HeaderIcons = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 10%;
  color: rgb(212, 212, 212);
  display: flex;
  justify-content: space-around;
  font-size: 1.2vw;

  a:visited {
    color: rgb(212, 212, 212);
  }
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
