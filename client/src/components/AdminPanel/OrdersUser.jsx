import axios from "axios";
import { useEffect, useState } from "react";
import {Table, Container, Button, Alert, Row, Col} from "react-bootstrap";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";


const OrdersUser = () => {

    const auth = useSelector(state => state)
    // console.log(auth)
  
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
     
    //   console.log("url " + import.meta.env.VITE_BACKEND_URL);
      const traerOrdenes = () => {
        const userId = auth.user.uid;
        // console.log(userId)
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/orders`;
  
        axios 
          .get(url)
          .then((res) =>setOrders(res.data))
          .catch((error) => console.log(error));
      };
      traerOrdenes();
      console.log(orders);
      // setProducts({...products});
      
    }, []);



  return (
    <>
    
    <Container  >
      <Table striped>
        <thead>
          <tr>
            <th>Fecha de Orden</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Telefono</th>
            <th>Domicilio</th>
            <th>Ciudad</th>
            <th>Codigo postal</th>
            <th>Precio</th>
            <th>Id Pedido</th>
          </tr>
        </thead>
        <tbody>
          {
           
            orders.length ?

          (

           orders?.map((item, index) => {
          
            return (
              <tr key={item.id}>
                <td>{item.orderDate}</td>
                <td>{item.orderItems.map(quant => {
                 return ( <td>{quant.quantity} </td>)
                })}</td>
               
                <td>{item.orderStatus}</td>
                <td>{item.phone}</td>
                {/* <td>{item.shippingAddress.name}</td> */}
                <td>Calle Principal</td>
                <td>tartagal</td>
                <td>2556</td>
                {/* <td>{item.shippingAddress.city}</td>
                <td>{item.shippingAddress.zip}</td> */}
                <td>{item.totalPrice}</td>
                <td>{item._id}</td>
                <td>
                    <Button
                      variant="success"
                      onClick={(e) =>console.log(e)}
                    >
                      Editar
                    </Button>{" "}
                    {/* <Button variant="warning">Ed</Button>{' '} */}
                    <Button
                      variant="danger"
                      
                    >
                      Borrar
                    </Button>{" "}
                  </td>
              </tr>
             
            );
          })
          )
          :
            (
              <Container>
          <Row className="justify-content-md-center" >
             
              <Col md='auto' >
              <Alert variant="danger">
            <Alert.Heading>No hay órdenes para mostrar</Alert.Heading>
              
          </Alert>
          </Col>
         
          </Row>
          </Container>
          )
          }
        </tbody>
      </Table>
    </Container>
    </>
  )
}

export default OrdersUser