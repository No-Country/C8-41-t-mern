import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order";
import { Link } from "react-router-dom";
import {Table, Container, Button} from "react-bootstrap";
import Swal from "sweetalert2";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log("url " + import.meta.env.VITE_BACKEND_URL);
    const traerOrdenes = () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/orders`;

      axios
        .get(url)
        .then((res) => setOrders(res.data))
        .catch((error) => console.log(error));
    };
    traerOrdenes();
    // setProducts({...products});
  }, [orders]);
  
  // useEffect(() => {
    
  //   const traerProductos = () => {
  //     const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;

  //     axios
  //       .get(url)
  //       .then((res) => setProducts(res.data))
  //       .catch((error) => console.log(error));
  //   };
  //   traerProductos();
  //   // setProducts({...products});
  // }, []);
  
 
  return (
    <>
      <Container>
        
      </Container>
    </>
  );
};





export default OrdersList;
