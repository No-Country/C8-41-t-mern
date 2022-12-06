import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(state => state.user.cart)
   
    const [cart, setCart]=useState([]);
    useEffect(() => {
        setCart(cartItems);
    
    }, [cart])
    
    console.log(cart);
    
  return (
    <>
    <div className="cart">

    <ul className="cart__items">
    {cart?.map((item, index) => {
        return <h1>{item}</h1>;
    })}
    </ul>
    </div>
    </>
  )
}

export default Cart