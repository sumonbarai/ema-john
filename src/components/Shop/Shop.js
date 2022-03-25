import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
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
      <div className="card-area">card add {cardProduct.length} </div>
    </div>
  );
};

export default Shop;
