import React from "react";

const Product = ({ item }) => {
  return (
    <li className="products__list-item">
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
};

export default Product;
