import React from "react";
import "./Product.css";
import { FiShoppingCart } from "react-icons/fi";
const Product = ({ product, handleCard }) => {
  const { img, price, ratings, seller, name } = product;
  return (
    <div className="product-card">
      <div className="product-thumbnail">
        <img src={img} alt="images" />
      </div>
      <div className="product-info">
        <div className="product-title">{name}</div>
        <p className="product-price">Price: $ {price} </p>
        <p className="product-Manufacturer">
          <small>Manufacturer : {seller}</small>
        </p>
        <p className="product-ratings">
          <small>Rating : {ratings}</small>
        </p>
      </div>
      <div className="product-button">
        <button onClick={() => handleCard(product)}>
          add to card <FiShoppingCart className="icons" />
        </button>
      </div>
    </div>
  );
};

export default Product;
