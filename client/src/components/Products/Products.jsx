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
                <div className="products__list-item__img">
                  <img src={item.url} alt={item.name} />
                </div>
                <div className="products__list-item__content">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="products__list-item__content-btn">
                    <p>{item.price}</p>
                    <button>BUY NOW</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Products;
