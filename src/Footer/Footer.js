import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterItem>
        <FooterItemHeader>Сервис и помощь</FooterItemHeader>
        <FooterItemContent>
          <ul>
            <li>Личный кабинет</li>
            <li>Оплата и доставка</li>
            <li>Обмен и возврат</li>
            <li>Сервисные услуги</li>
            <li>Гарантийное обслуживание</li>
            <li>Библиотека знаний</li>
            <li>Отзывы и предложения</li>
            <li>Юр. лицам</li>
          </ul>
        </FooterItemContent>
      </FooterItem>
      <FooterItem>
        <FooterItemHeader>Информация</FooterItemHeader>
        <FooterItemContent>
          <ul>
            <li>О компании</li>
            <li>Наши магазины</li>
            <li>Социальные проекты</li>
            <li>Вакансии</li>
            <li>Арендодателям</li>
            <li>Сотрудничество</li>
            <li>Информация о закупках</li>
            <li>Контакты</li>
            <li>Новости</li>
            <li>Акции</li>
            <li>Наши проекты</li>
          </ul>
        </FooterItemContent>
      </FooterItem>
      <FooterItem>
        <FooterItemHeader>Контакты</FooterItemHeader>
        <FooterItemContent>
          <ul>
            <li>
              <Upper>Для регионов</Upper>
              <Lower>1488228</Lower>
            </li>
            <li>
              <Upper>E-mail</Upper>
              <Lower>1488228</Lower>
            </li>
            <li>
              <Upper>Корпоративный сайт</Upper>
              <Lower>1488228</Lower>
            </li>
            <li>
              <Upper>Мы в соцсетях</Upper>
              <Lower>
                <img src="footerIcons/fb.svg" alt="" />
                <img src="footerIcons/vk.svg" alt="" />
                <img src="footerIcons/insta.svg" alt="" />
                <img src="footerIcons/ok.svg" alt="" />
                <img src="footerIcons/youtube.svg" alt="" />
              </Lower>
            </li>
          </ul>
        </FooterItemContent>
      </FooterItem>
      <FooterItem>
        <FooterItemHeader></FooterItemHeader>
        <FooterItemContent>
          <ul>
            <li>
              <Upper>Скачайте наше приложение</Upper>
              <LowerMobileBadge>
                <img src="footerIcons/apple-store-badge.png" alt="" />
                <img src="footerIcons/google-play-badge.png" alt="" />
              </LowerMobileBadge>
            </li>
          </ul>
        </FooterItemContent>
      </FooterItem>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  height: 40vw;
  bottom: 0;
  background-color: #005aab;
  position: relative;
  width: 100%;
  margin-top: 10%;
`;

const FooterContent = styled.div`
  margin: 0 15% 0 15%;
  padding-top: 3%;
  display: flex;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  font-size: 1vw;
  color: #ffffff;
`;

const FooterItem = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 3%;
`;

const FooterItemHeader = styled.div`
  font-size: 1.5em;
`;

const FooterItemContent = styled.div`
  margin-top: 15%;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-top: 7%;
  }
`;

const Upper = styled.div`
  color: #9fb0eb;
`;

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  img {
    width: 15%;
  }
`;

const LowerMobileBadge = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  img {
    width: 40%;
  }
`;
export default Footer;
