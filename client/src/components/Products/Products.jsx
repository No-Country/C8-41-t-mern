import React from "react";
import { productsData } from "./dummyData.js";
import "./Products.css";
const Products = () => {
  return (
    <div className="products">
      {
        <ul className="products__list">
          {productsData.map((item, index) => {
            return (
              <li key={index} className="products__list-item">
                <img src={item.url} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <button>Buy</button>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Products;
