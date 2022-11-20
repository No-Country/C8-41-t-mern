import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail.jsx";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const traerProductos = () => {
      const url = "http://localhost:4000/api/products";

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
            return <ProductDetail item={item} key={index} />;
          })}
        </ul>
      }
    </div>
  );
};

export default Products;
