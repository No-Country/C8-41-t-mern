
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import  axios  from 'axios';
import './operation.css'
import { CartProvider, useCart } from "react-use-cart";

const Operation = () => {
  const user = useSelector((state) => state.user) || "";
  console.log(user);
  const search = useLocation().search;
  console.log(search);
  const status = new URLSearchParams(search).get('status');
  
  let url = `${import.meta.env.VITE_BACKEND_URL}/api/orders`; //usar variable de entorno
  let cart=useCart()
  
  console.log(user.street);
  useEffect(()=>{
        let enviar=async()=>{
         //Pedido a la ruta de orders
       await axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${import.meta.env.ACCESS_TOKEN}` },
      data: {
        street:user.street, 
       phone:user.phone, 
       uid:user.uid, 
       totalPrice:cart.cartTotal,
       cart:cart.items
      },
    })
  }
  enviar()
},[])
  
    console.log(status)
    return(
      <>
      <div className="card">
  <div className="card-header">
    Gracias por su compra
  </div>
  <div className="card-body">
    Esperamos que haya disfrutado de su experiencia de compra con nosotros. ¡Gracias por confiar en nosotros!
  </div>
</div>
      
      </>
    )
//     if(status == "approved"){
//         return <h1>Hola muchas gracias por tu compra estamos preparando tu pedido</h1>
//     }else{
//       return <h1>Entre aca</h1>
//     }

 }

export default Operation