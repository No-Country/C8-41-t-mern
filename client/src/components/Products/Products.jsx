import axios from "axios";
import { useEffect, useState } from "react";

import Product from "./Product";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const traerProductos = () => {
<<<<<<< HEAD
      const url = "http://localhost:3001/api/products";
=======
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;
>>>>>>> 7b48ef45d0dc8380b6e29c8c9414a64e0bb41834

      axios
        .get(url)
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    };
    traerProductos();
  }, []);

  // console.log(products);

  return (
    <div className="products">
      {
        <ul className="products__list">
          {products.map((item, index) => {
            console.log(item);
            return <Product item={item} key={index} />;
          })}
        </ul>
      }
    </div>
  );
};

export default Products;
