import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useAuthStore } from "../../hooks/useAuthStore";

const Cart = () => {
  const { startDeleteToCart } = useAuthStore();

  const cartItems = useSelector((state) => state.user.cart);
  const userId = useSelector((state) => state.user.uid);

  const [cart, setCart] = useState([]);
  let total = 0.0;

  useEffect(() => {
    setCart(cartItems);
    //let total=cart.price.reduce((x, y) => x + y);

    //let total=0;
  }, [cartItems]);

  const handleDelete = (userId, productId) => {
    startDeleteToCart(userId, productId).then(() => {
      setCart(cartItems);
    });
  };
  const handleSubmit = () => {
    localStorage.setItem("checkout", "");
    localStorage.setItem("total", "");
    //gestionar checkout
  };

  return (
    <>
      <Container className="my-3">
        <h1 style={{ color: "rgb(255,193,7)", textAlign: "center" }}>
          {" "}
          Carrito de compras{" "}
        </h1>
        <h2> Productos en el carrito: {cart.length} </h2>

        <Accordion>
          {cart?.map((item, index) => {
            {
              /* console.log(item) */
            }
            total += item.price;
            return (
              <>
                <Accordion.Item
                  eventKey={index}
                  style={{ marginBottom: "20px" }}
                >
                  <Accordion.Header>
                    Nombre del Producto: {item.productName} <span> </span>{" "}
                  </Accordion.Header>
                  {/* <Accordion.Header></Accordion.Header> */}
                  <div className="text-end my-1 mx-3">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(userId, item._id)}
                    >
                      {" "}
                      <i class="fa-solid fa-trash-can"></i>{" "}
                    </Button>
                  </div>
                  <div className="text-end my-1 mx-3">
                    Precio:
                    {item.price === "" ? "$300" : item.price}
                  </div>

                  <Accordion.Body>
                    {" "}
                    Descripcion: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          })}
        </Accordion>
        <h2 className="text-end">Total: {total}</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
          <div className="text-end">
            <Button className="link">Comprar</Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Cart;
