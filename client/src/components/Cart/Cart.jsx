import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useAuthStore } from '../../hooks/useAuthStore';

const Cart = () => {

    const { startDeleteToCart } = useAuthStore()

    const cartItems = useSelector(state => state.user.cart)
    const userId = useSelector(state => state.user.uid)
   
     
   
   
    const [cart, setCart]=useState([]);
    
    useEffect(() => {
        setCart(cartItems);
    
      }, [cart])
      
      
      const handleDelete = ( userId, productId, e) => {
       
        console.log(productId);
        console.log(userId);
        startDeleteToCart( userId, productId, e)
    }
    
  return (
    <>
<Container className='my-3'>
    <h1> Carrito de compras </h1>
    <h2> Productos en el carrito: {cart.length} </h2>

  <Accordion >
        {
          cart?.map((item, index) => {
            {/* console.log(item) */}
            return (
          <>
        <Accordion.Item eventKey={index}>
            <Accordion.Header>Nombre del Producto: {item.productName} <span>{' '} </span>  </Accordion.Header>
            {/* <Accordion.Header></Accordion.Header> */}
            <Button variant='danger' onClick={(e) => handleDelete(userId, item._id,  e)}> Eliminar </Button>
            
            
            <Accordion.Body> Descripcion: 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
            </Accordion.Item>
          </>

            )
          })
        }
      
      </Accordion>
      <h2 className='text-end' >Total</h2>
        <div className='text-end' >
            <Button>Comprar</Button>

        </div>
    </Container>

    {/* <div className="cart">

    <ul className="cart__items">
    {cart?.map((item, index) => {
        return(
          <>
          <ol key={index}>
          <h1>{item.productName} - Cantidad: {item.quantity} </h1>
          </ol>
          

          </>
        ) ;
    })}
    </ul>
    </div> */}
    </>
  )
}

export default Cart