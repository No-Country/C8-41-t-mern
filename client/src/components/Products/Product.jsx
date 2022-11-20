import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <li className="products__list-item">
      <div className="products__list-item__img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="products__list-item__content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="products__list-item__content-btn">
          <p>{item.price}</p>
          <button>BUY NOW</button>
          <Link to={`/detalle/${item._id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Product;
