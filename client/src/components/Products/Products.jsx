import React from "react";
import { productsData } from "./dummyData.js";
import Product from "./Product.jsx";
import "./Products.css";
const Products = () => {
  return (
    <div className="products">
      <ul className="products__list">
        {productsData.map((item, index) => {
          return <Product item={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
