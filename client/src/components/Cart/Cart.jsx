import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PayForm from "./PayForm";
import Checkout from "./MercadoPago";
import axios from "axios";
import MercadoPago from "./MercadoPago";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user) || "";
  const token = localStorage.getItem("token");
  const [buyId, setBuyId] = useState(null);
  const [showBoton, setShowboton] = useState(false);

  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  //let total = 0.0;
  let order = {
    orderItems: items,
    shippingAddress: {
      address: user.street,
    },
    phone: user.phone,
    totalPrice: cartTotal,
    email: user.email,
    userId: user.uid,
  };

  const compra = async () => {
    const data = await axios({
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_URL}/api/compra`,
      headers: { "x-token": ` ${token}` },
      data: order,
    });
    return data;
  };
  console.log(items);

  useEffect(
    (items) => {
      console.log();
      let data = compra().then((data) => {
        return setBuyId(data.data);
      });
    },
    [items]
  );

  useEffect(
    //elimina los todos los elementos
    () => {
      let boton = document.getElementsByClassName("cho-container")[0];

      if (boton) {
        boton.innerHTML = "";
      }
    },
    [buyId]
  );

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(items);

    // const url=`${import.meta.env.VITE_BACKEND_URL}/api/orders`;
    // //ORDEN DE COMPRA (FUNCIONA)
    // await axios
    //     .post(url, order, { headers: { "x-token": ` ${token}` } })
    //     .then((resp) => {
    //     //respuesta = resp.data.name;
    //     console.log(resp);
    //   })
    //     .catch((error) => console.log(error));
    //ESTABLECER METODO PARA CHECKOUT AQUI
  };
  if (isEmpty) return <h1>Tu carito esta vacio</h1>;
  return (
    <>
      {/* <Container>
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {  items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <h2 className="text-end">Total: {cartTotal}</h2> */}
      {/* <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
          <div className="text-end">
            <Button>Comprar</Button>
          </div>
        </form> */}
      {/* <PayForm/>*/}

      {/* </Container> */}
      <Container className="my-3">
        <h1
          style={{
            color: "rgb(255,193,7)",
            textAlign: "center",
            fontWeight: "600",
            letterSpacing: "1.5px",
          }}
        >
          {" "}
          Carrito de compras{" "}
        </h1>
        <h2> Productos en el carrito: {totalItems} </h2>
        <Accordion>
          {items?.map((item, index) => {
            return (
              <>
                <Accordion.Item
                  eventKey={index}
                  key={item.id}
                  style={{ marginBottom: "20px", borderRadius: "20px" }}
                >
                  <Accordion.Header>
                    <h3>Nombre del Producto: {item.name} </h3>
                    <span> </span>{" "}
                  </Accordion.Header>
                  {/* <Accordion.Header></Accordion.Header> */}
                  <div className="text-end my-3 mx-3">
                    <Button
                      variant="warning"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      {" "}
                      <i class="fa-solid fa-minus"></i>{" "}
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      {" "}
                      <i class="fa-solid fa-plus"></i>{" "}
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      {" "}
                      <i class="fa-solid fa-trash-can"></i>{" "}
                    </Button>
                  </div>
                  <div
                    className="text-end my-3 mx-3"
                    style={{ color: "rgb(255,193,7)", fontWeight: "600" }}
                  >
                    Precio:
                    {item.price === "" ? "$500" : item.price}
                  </div>

                  <Accordion.Body> </Accordion.Body>
                  <h2 className="text-end">Cantidad: {item.quantity}</h2>
                </Accordion.Item>
              </>
            );
          })}
        </Accordion>
        <h2 className="text-end">Total: {cartTotal}</h2>
        <MercadoPago buyId={buyId} />
        {/* <Button onClick={handleClick}>Confirmar Compra</Button> */}
        {/* <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
          <div className="text-end">
        //
          </div>
        </form> */}
      </Container>
    </>
  );
};

export default Cart;
