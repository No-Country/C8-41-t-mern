
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import  axios  from 'axios';
const Operation = () => {
  const search = useLocation().search;
  console.log(search);
  const status = new URLSearchParams(search).get('status');
  
  let url = "http://localhost:3000/api/orders"; 
  
  
  // useEffect(
    
  //        //Pedido a la ruta de orders
  //      axios({
  //     method: "post",
  //     url: url,
  //     headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
  //     data: {
  //      street:order.shippingAddress.address, 
  //      phone:order.phone, 
  //      uid:order.userId, 
  //      totalPrice:order.totalPrice,
  //      cart:order.orderItems
  //     },
  //   }))
  
    console.log(status)
  return (
    <>
        <h1>Hola</h1>
    </>
    
  )
}

export default Operation