import React from "react";
import Header from "./Header/Header.js";
import PageContent from "./PageContent/PageContent.js";
import Footer from "./Footer/Footer.js";

const PageRender = () => (
[
    <Header key="navbar" />,
    <PageContent key="pagecontent" />,
    <Footer key="footer" />
]
);

export default PageRender;