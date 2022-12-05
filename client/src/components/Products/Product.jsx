
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail";

const Product = ({ item }) => {
  return (
    <>
      <li className="products__list-item">
        <div className="products__list-item__img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="products__list-item__content">
          <h2 className="products__list-item__content-title">{item.name}</h2>
          <p className="products__list-item__content-description">{item.description}</p>
          <div className="products__list-item__content-extra">
            <p>${item.price}</p>
            <div className="products__list-item__content-extra__stars">
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
            </div>  
          </div>
          <div className="products__list-item__content-btn">
            <button className="products__list-item__content-btn__buy">Comprar</button>
            <Link to={`/detalle/${item._id}`}>
              <button className="products__list-item__content-btn__details">Detalles</button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default Product;
