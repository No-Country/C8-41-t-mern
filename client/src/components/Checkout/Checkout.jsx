import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MercadoPago from './MercadoPago';

const Checkout = () => {
   const [buyId,setBuyId]=useState(null);
   const user = useSelector((state) => state.user) || "";
  const token = localStorage.getItem("token");

  useEffect(() => {
       
        setBuyId(localStorage.getItem("preferenceID"));


      }, [])
  return (
    <>
    <div>Checkout</div>
    <MercadoPago buyId={buyId}/>
    </>
    
  )
}

export default Checkout