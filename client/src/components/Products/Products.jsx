import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("doc is "+import.meta.env.VITE_BACKEND_URL);
    const traerProductos = () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;

      axios
        .get(url)
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
            console.log(item);
            return <Product item={item} key={index} />;
          })}
        </ul>
      }
    </div>
  );
};

export default Products;
