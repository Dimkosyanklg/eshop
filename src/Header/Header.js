import React from "react";
import styled from "styled-components";

const HeaderBody = styled.header`
  margin-top: 20px;
`;
const HeaderContainer = styled.div`
  background-color: royalblue;
`;
const HeaderContent = styled.div`
  margin-left: 10px;

  & {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
  }

  form {
    width: 50%;
    height: 80%;
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
    font-size: 30px;
  }
`;
const Navigation = styled.nav`
  & {
    height: 50px;
  }

  ul.menu-main {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    //position: relative;
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
  }

  li.menu-item {
    text-align: center;
  }

  li.menu-item a {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: rgb(100, 100, 100);
  }

  @media screen and (max-width: 1100px) {
    .menu-item {
      font-size: 10px;
    }
  }
`;
const Header = () => (
  <HeaderBody>
    <HeaderContainer>
      <HeaderContent>
        <a href="http://github.com/Dimkosyanklg">
          <i class="fab fa-github"></i>
        </a>
        <form>
          <input type="search" placeholder="Не работает(пока(наверно))" />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </HeaderContent>
    </HeaderContainer>
    <Navigation>
      <ul className="menu-main">
        <li className="menu-item">
          <a href="">Гаджеты</a>
        </li>
        <li className="menu-item">
          <a href="">Компьютеры</a>
        </li>
        <li className="menu-item">
          <a href="">Фото</a>
        </li>
        <li className="menu-item">
          <a href="">TV</a>
        </li>
        <li className="menu-item">
          <a href="">Аудио</a>
        </li>
        <li className="menu-item">
          <a href="">Бытовая техника</a>
        </li>
        <li className="menu-item">
          <a href="">Климат</a>
        </li>
        <li className="menu-item">
          <a href="">Дом</a>
        </li>
        <li className="menu-item">
          <a href="">Детские товары</a>
        </li>
        <li className="menu-item">
          <a href="">Авто</a>
        </li>
        <li className="menu-item">
          <a href="">Инструмент</a>
        </li>
        <li className="menu-item">
          <a href="">Туризм</a>
        </li>
        <li className="menu-item">
          <a href="">Спорт</a>
        </li>
        <li className="menu-item">
          <a href="">Часы и украшения</a>
        </li>
      </ul>
    </Navigation>
  </HeaderBody>
);

export default Header;
