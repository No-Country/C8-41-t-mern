import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import Product from "../Products/Product";
import { Link } from "react-router-dom";
import {Table, Container, Button} from "react-bootstrap";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("url " + import.meta.env.VITE_BACKEND_URL);
    const traerProductos = () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;

      axios
        .get(url)
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    };
    traerProductos();
    // setProducts({...products});
  }, [products]);
  
  // useEffect(() => {
    
  //   const traerProductos = () => {
  //     const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;

  //     axios
  //       .get(url)
  //       .then((res) => setProducts(res.data))
  //       .catch((error) => console.log(error));
  //   };
  //   traerProductos();
  //   // setProducts({...products});
  // }, []);
  
  const checkStock = (stock) => {
    console.log("stock is "+stock);
    // console.log(stock);
    // let answer=0
    // stock.stock.isNumber() ? answer=stock.stock : answer="Agotado"  
    // return answer;
    return "Agotado";
  };
  const handleDelete = async (id, e, item) => {
    e.preventDefault();
    console.log("id is "+id);
    const target = `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`;
    await Swal.fire({
      position: "center",
      icon: "warning",
      title: `Desea Eliminar el producto ${item} ?`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: 'green',
      denyButtonText: `No`,
      buttons: true,
      //dangerMode: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
        .delete(target)
        .then((res) => {
          console.log({res});
          console.log("item eliminado");
          //necesito forzar update
          // 
          Swal.fire({
            position: "center",
            icon: "success",
            title: `El producto ${item} fue eliminado exitosamente`,
            showConfirmButton: false,
            timer: 2500,
          });
          
        })
        .catch((error) => console.log(error));
        //Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El item no ha sido eliminado', '', 'info')
      }});
    
    
  };
  return (
    <>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Vendidos</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
            //console.log(item);
              return (
                <tr key={item.id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  {/* <td>{checkStock(item.stock)}</td> */}
                  <td>{item.stock>0? item.stock : 'Agotado'}</td>
                  <td>{item.sold}</td>
                  <td>
                    <Button variant="success">Edit</Button>{' '}
                  {/* <Button variant="warning">Ed</Button>{' '} */}
                  <Button variant="danger" onClick={((e) => {
                    handleDelete(item._id, e, item.name);
                  })}>Delete</Button>{' '}</td>
                </tr>
                // <Product item={item} key={index} />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};





export default ManageProducts;
