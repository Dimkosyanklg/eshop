import React from "react";
import "./Catalog.css";

const Catalog = ({ goodsItem }) => (
    <div className="goods-container">
        {goodsItem.map(({ name, price, imgSrc }) => (
            <div className="goods-item" key={name}>
                <div className="goods-item-image">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="goods-item-name"><a href="">{name}</a></div>
                <div className="goods-item-price">{price}</div>
            </div>
        ))}
    </div>
);

export default Catalog;
            