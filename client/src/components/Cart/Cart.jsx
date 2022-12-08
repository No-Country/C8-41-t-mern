import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
      } = useCart();
      //let total = 0.0;
      if (isEmpty) return <p>Your cart is empty</p>;
    const handleSubmit =()=>{
    e.preventDefault();
    //ESTABLECER METODO PARA CHECKOUT AQUI

    }
    console.log(items);
  return (
    <>
    <Container>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
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
      <h2 className="text-end">Total: {cartTotal}</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
          <div className="text-end">
            <Button>Comprar</Button>
          </div>
        </form>
        </Container>
    </>
  )
}

export default Cart