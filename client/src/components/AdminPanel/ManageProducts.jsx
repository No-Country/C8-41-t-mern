import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import Product from "../Products/Product";
import { Link } from "react-router-dom";
import {Table, Container, Button} from "react-bootstrap";

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
    // setProducts({...products});
  }, [products]);
  
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
    // setProducts({...products});
  }, []);
  console.log("stock is "+products);
  const checkStock = (stock) => {
    // console.log(stock);
    // let answer=0
    // stock.stock.isNumber() ? answer=stock.stock : answer="Agotado"  
    // return answer;
    return "Agotado";
  };
  const handleDelete = async (id, e) => {
    e.preventDefault();
    console.log("id is "+id);
    const target = `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`;
    await axios
        .delete(target)
        .then((res) => {
          console.log({res});
          console.log("item eliminado");
          //necesito forzar update
          // 
          
        })
        .catch((error) => console.log(error));
    
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
              //console.log("id is "+item._id);
              return (
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{checkStock(item.stock)}</td>
                  <td>{item.sold}</td>
                  <td>
                    <Button variant="success">Edit</Button>{' '}
                  {/* <Button variant="warning">Ed</Button>{' '} */}
                  <Button variant="danger" onClick={((e) => {
                    handleDelete(item._id, e);
                  })}>Delete</Button>{' '}</td>
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
