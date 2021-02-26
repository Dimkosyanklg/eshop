import React from "react";
import styled from "styled-components";

const FooterContent = styled.footer`
  border: 2px solid black;
  height: 20px;
  bottom: 0;
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

const Footer = () => <FooterContent>Тут футер</FooterContent>;

export default Footer;
