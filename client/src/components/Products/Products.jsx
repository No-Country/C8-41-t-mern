import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "./dummyData.js";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const traerProductos = () => {
      const url = "http://localhost:4000/api/products";

      axios.get(url)
          .then((res) => setProducts(res.data))
          .catch((error) => console.log(error));
    };
    traerProductos();
  }, []);

  console.log(products);

  return (
    <div className="products">
      {
        <ul className="products__list">
          {products.map((item, index) => {
            return (
              <li key={index} className="products__list-item">
                <div className="products__list-item__img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="products__list-item__content">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="products__list-item__content-btn">
                    <p>{item.price}</p>
                    <button>BUY NOW</button>
                    <Link to={`/detalle/${item._id}`} >
                      <button>Ver detalle</button>
                    </Link>
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
