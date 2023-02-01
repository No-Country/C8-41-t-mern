import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const OrdersUser = () => {

    const auth = useSelector(state => state)
    // console.log(auth)
  
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
     
      console.log("url " + import.meta.env.VITE_BACKEND_URL);
      const traerOrdenes = () => {
        const userId = auth.user.uid;
        // console.log(userId)
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/orders`;
  
        axios 
          .get(url)
          .then((res) => setOrders(res.data))
          .catch((error) => console.log(error));
      };
      traerOrdenes();
      console.log(orders);
      // setProducts({...products});
      
    }, []);



  return (
    <div>OrdersUser</div>
  )
}

export default OrdersUser