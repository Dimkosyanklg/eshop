import React from "react";
import "./Header.css";
const Header = () => (
    <header>
        <div className="head-container">
            <div className="page-head">
                <a href="http://github.com/Dimkosyanklg">ESHOP BY DIMKOSYAN</a>
                <form>
                    <input type="search" placeholder="Не работает(пока(наверно))" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </div>
        <nav className="navbar">
            <ul className="menu-main">
                <li className="menu-item"><a href="">Гаджеты</a></li>
                <li className="menu-item"><a href="">Компьютеры</a></li>
                <li className="menu-item"><a href="">Фото</a></li>
                <li className="menu-item"><a href="">TV</a></li>
                <li className="menu-item"><a href="">Аудио</a></li>
                <li className="menu-item"><a href="">Бытовая техника</a></li>
                <li className="menu-item"><a href="">Климат</a></li>
                <li className="menu-item"><a href="">Дом</a></li>
                <li className="menu-item"><a href="">Детские товары</a></li>
                <li className="menu-item"><a href="">Авто</a></li>
                <li className="menu-item"><a href="">Инструмент</a></li>
                <li className="menu-item"><a href="">Туризм</a></li>
                <li className="menu-item"><a href="">Спорт</a></li>
                <li className="menu-item"><a href="">Часы и украшения</a></li>
            </ul>
    </nav>
    </header>
);

export default Header;