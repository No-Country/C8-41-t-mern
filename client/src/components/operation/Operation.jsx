
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import  axios  from 'axios';
const Operation = () => {
  const search = useLocation().search;
  console.log(search);
  const status = new URLSearchParams(search).get('status');
  
  let url = "http://localhost:3000/api/orders"; //usar variable de entorno

  
  
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
    return(
      <>
      {status !== "approved" && <h1>No se aprobo la compra sentimosla molestia</h1>&&<h1>Se aprobo la compra estamos preparando su pedido muchas gracias</h1>}
      
      </>
    )
//     if(status == "approved"){
//         return <h1>Hola muchas gracias por tu compra estamos preparando tu pedido</h1>
//     }else{
//       return <h1>Entre aca</h1>
//     }

 }

export default Operation