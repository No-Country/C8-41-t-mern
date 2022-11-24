import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import Product from "../Products/Product";
import {Table, Container} from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("doc is " + import.meta.env.VITE_BACKEND_URL);
    const traerProductos = () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;

      axios
        .get(url)
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    };
    traerProductos();
  }, []);
  console.log("stock is "+products);
  const checkStock = (stock) => {
    // console.log(stock);
    // let answer=0
    // stock.stock.isNumber() ? answer=stock.stock : answer="Agotado"  
    // return answer;
    return "Agotado";
  };
  return (
    <>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Vendidos</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              console.log(item);
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{checkStock(item.stock)}</td>
                  <td>{item.sold}</td>
                  <td>{"X"}</td>
                </tr>
                // <Product item={item} key={index} />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ManageProducts;
