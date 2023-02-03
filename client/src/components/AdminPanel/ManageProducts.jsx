import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import Product from "../Products/Product";
import { Link } from "react-router-dom";
import { Table, Container, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import CreateProduct from "../CreateProduct/CreateProduct";
import UpdateProduct from "../UpdateProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState();
  
  const handleClose = () => setShow(false);
  
  const handleShow = (e, item, title) => {
    e.preventDefault();
    setShow(true);
    // console.log(item)
    setProduct(item);
  };
  
  useEffect(() => {
   
   
    //console.log("url " + import.meta.env.VITE_BACKEND_URL);
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


  const checkStock = (stock) => {
    console.log("stock is " + stock);
    // console.log(stock);
    // let answer=0
    // stock.stock.isNumber() ? answer=stock.stock : answer="Agotado"
    // return answer;
    return "Agotado";
  };
  const handleDelete = async (id, e, item) => {
    e.preventDefault();
    console.log("id is " + id);
    const target = `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`;
    await Swal.fire({
      position: "center",
      icon: "warning",
      title: `Desea Eliminar el producto ${item} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "green",
      denyButtonText: `No`,
      buttons: true,
      //dangerMode: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(target)
          .then((res) => {
            console.log({ res });
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
        Swal.fire("El item no ha sido eliminado", "", "info");
      }
      handleClose();
    });
  };
  
  
  return (
    <>
      <Container style={{ marginBottom: "40px" }}>
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
              return (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  {/* <td>{checkStock(item.stock)}</td> */}
                  <td>{item.stock > 0 ? item.stock : "Agotado"}</td>
                  <td>{item.sold}</td>
                  <td>
                    <Button variant="success">
                      <i
                        className=" fa-solid fa-edit"
                        onClick={(e) => {
                          handleShow(e, item, setEdit(true));
                        }}
                      ></i>
                    </Button>{" "}
                    {/* <Button variant="warning">Ed</Button>{' '} */}
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        handleDelete(item._id, e, item.name);
                      }}
                    >
                      <i className=" fa-solid fa-trash"></i>
                    </Button>{" "}
                  </td>
                </tr>
                // <Product item={item} key={index} />
              );
            })}
          </tbody>
        </Table>

        {/* <div className="position-sticky"> */}
        <Button
          className="products__list-item__content-btn__details"
          onClick={(e) => {
            handleShow(e, {}, setEdit(false));
          }}
        >
          Añadir Producto <i className=" fa-solid fa-plus"></i>
        </Button>
        {/* </div> */}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Editar Usuario</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="py-0 my-0">
          {edit == true ? <UpdateProduct item={product} /> : <CreateProduct />}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ManageProducts;
