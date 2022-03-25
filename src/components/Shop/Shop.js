import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { BsTrash } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cardProduct, setCardProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCard = (product) => {
    setCardProduct([...cardProduct, product]);
  };

  // card calculation
  let price = 0;
  let shipping = 0;
  for (let singleProduct of cardProduct) {
    price = price + singleProduct.price;
    shipping = shipping + singleProduct.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = (price + shipping + tax).toFixed(2);

  return (
    <div className="shop-area">
      <div className="product-area">
        {products.map((product) => (
          <Product
            product={product}
            handleCard={handleCard}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="card-area">
        <h2 className="card-title">order summary</h2>
        <p className="cart-item">Selected Items: {cardProduct.length}</p>
        <p className="cart-price">Total Price: ${price}</p>
        <p className="cart-shipping">Total Shipping Charge: ${shipping}</p>
        <p className="cart-tax">Tax: ${tax}</p>
        <p className="cart-grand-total">Grand Total: ${grandTotal}</p>
        <div className="card-button-group">
          <button className="clear-card">
            <span>clear card</span>
            <BsTrash />
          </button>
          <button className="review-order">
            <span>review order</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
