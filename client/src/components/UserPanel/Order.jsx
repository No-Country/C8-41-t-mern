import React from 'react'
import {Button, Accordion} from "react-bootstrap";

const Order = ({order, index}) => {
 
  return (
    <>
    <Table striped>
    <thead>
      <tr>
        <th>id</th>
        <th>Creada</th>
        <th>Estado</th>
        <th>Total</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      
        
          
          <tr key={order.id}>
          <td>{order._id}</td>
          <td>{order.name}</td>
          {/* <td>{checkStock(order.stock)}</td> */}
          <td>{order.stock>0? order.stock : 'Agotado'}</td>
          <td>{order.sold}</td>
          <td>
            <Button variant="success">Edit</Button>{' '}
          {/* <Button variant="warning">Ed</Button>{' '} */}
          <Button variant="danger" onClick={((e) => {
            handleDelete(order._id, e, order.name);
          })}>Delete</Button>{' '}</td>
        </tr>
          {/* // <Product o={item} key={index} /> */}
        ;
      
    </tbody>
  </Table>
  </>
  )
}

export default Order