import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import PayForm from "./PayForm";
import Checkout from "./MercadoPago";
import axios from "axios";
import MercadoPago from "./MercadoPago";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
const Cart = () => {
  const user = useSelector((state) => state.user) || "";
  const token = localStorage.getItem("token");
  const [buyId, setBuyId] = useState(null);
  const [showBoton, setShowboton] = useState(false);
  let refmp = useRef();
  const { startAddToCart, startDeleteToCart, startupdateToCart } =
    useAuthStore();
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
  console.log(useCart());
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
      if (items.length >= 1) {
        let remover = refmp.current.children[0];
        remover.innerHTML = "";
      }
      //por el momento
    },
    [buyId]
  );

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(items);
  };

  if (isEmpty) {
    return  <>
    <div className="card">
  <div className="card-header">
    Su carrito esta vacio
  </div>
  <div className="card-body">
   Esperemos que disfrute de su compra
  </div>
</div>

    </>
};

  //Consigue el _id de objeto dentro de cart, necesario para la eliminacion
  const conseguirIdProguct = (id) => {
    console.log(user);
    let _id = user.cart.filter((item) => item.productID == id);

    return _id;
  };
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
                      onClick={(e) => {
                        e.preventDefault();
                        //evita que el contador baje de 0
                        if (item.quantity - 1 != 0) {
                          let quantity = updateItemQuantity(
                            item.id,
                            item.quantity - 1
                          );
                          //Se encargan de la actualizacion en la base de datos
                          let _id = conseguirIdProguct(item.id, item.name);
                          startupdateToCart(
                            item,
                            user.uid,
                            item.quantity - 1,
                            _id[0]._id
                          );
                        }
                      }}
                    >
                      {" "}
                      <i class="fa-solid fa-minus"></i>{" "}
                    </Button>
                    <Button
                      variant="warning"
                      onClick={(e) => {
                        e.preventDefault();
                        updateItemQuantity(item.id, item.quantity + 1);
                        let _id = conseguirIdProguct(item.id, item.name);
                        startupdateToCart(
                          item,
                          user.uid,
                          item.quantity + 1,
                          _id[0]._id
                        );
                      }}
                    >
                      {" "}
                      <i class="fa-solid fa-plus"></i>{" "}
                    </Button>
                    {/* Solucionado boton de eliminar */}
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        e.preventDefault();
                        let producto = removeItem(item.id);
                        let _id = conseguirIdProguct(item.id);
                        startDeleteToCart(user.uid, _id[0]._id);
                      }}
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
        <div ref={refmp}>
          <MercadoPago buyId={buyId} />
        </div>
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
