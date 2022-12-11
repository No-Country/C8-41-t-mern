import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import ProductDetail from "../ProductDetail";

const Product = ({ item, userId }) => {
  // console.log(userId)

  const { startAddToCart } = useAuthStore();

  const dispatch = useDispatch();

  const handleClick = () => {
    let quantity = 1;
    startAddToCart(item, userId, quantity);
  };

  return (
    <>
      <li className="products__list-item">
        <div className="products__list-item__img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="products__list-item__content">
          <h2 className="products__list-item__content-title">{item.name}</h2>
          <div className="products__list-item__content-labels">
            <p className="products__list-item__content-materials">
              {item.sold} sold
            </p>
          </div>

          <div className="products__list-item__content-extra">
            <p className="products__list-item__content-extra__price">
              ${item.price}
            </p>
            <div className="products__list-item__content-extra__stars">
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
              <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
            </div>
          </div>

          <p className="products__list-item__content-description">
            {item.description}
          </p>

          <div className="products__list-item__content-btn">
            <button
              className="products__list-item__content-btn__buy"
              onClick={handleClick}
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <Link to={`/detalle/${item._id}`}>
              <button className="products__list-item__content-btn__details">
                Detalles
              </button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default Product;
