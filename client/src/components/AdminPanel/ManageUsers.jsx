import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import Product from "../Products/Product";
import { Link } from "react-router-dom";
import { Table, Container, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import EditProfiles from "./EditProfiles";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const auth = useSelector((state) => state) || "";
  const token = localStorage.getItem("token");
  //console.log("token is "+token);
  
  useEffect(() => {
    console.log("url " + import.meta.env.VITE_BACKEND_URL);
    const traerUsuarios = () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/users`;

      axios
        .get(url, { headers: { 'x-token': ` ${token}` } })
        .then((res) => setUsers(res.data))
        .catch((error) => console.log(error));
    };
    traerUsuarios();
    //console.log("users are...");
    //console.log(users);
    // setProducts({...products});
  }, [users]);

  const handleDelete = async (id, e, user) => {
    e.preventDefault();
    console.log("id is "+id);
    const target = `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`;
    await Swal.fire({
      position: "center",
      icon: "warning",
      title: `Desea Eliminar el usuario ${user} ?`,
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
        .delete(target, { headers: { 'x-token': ` ${token}` } })
        .then((res) => {
          console.log({res});
          console.log("usuario eliminado");
          //necesito forzar update
          // 
          Swal.fire({
            position: "center",
            icon: "success",
            title: `El usuario ${user} fue eliminado exitosamente`,
            showConfirmButton: false,
            timer: 2500,
          });
          
        })
        .catch((error) => console.log(error));
        //Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El usuario no ha sido eliminado', '', 'info')
      }});
    };
    const handleEdit = async (id, e, user) => {

    }

    // Modal de Editar Usuario
    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (user, e) =>{
        e.preventDefault();
        setShow(true);
        setUser(user);
    } 

  return (
    <>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>¿Es Admin?</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
             //console.log("user is...");
              //console.log(user);
              return (
                <tr key={index}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  {/* <td>{checkStock(user.stock)}</td> */}
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.isAdmin? 'Si' : 'No'}</td>
                  <td>
                    <Button variant="success"  onClick={(e) => {
                        handleShow(user, e);
                      }}>Editar</Button>{" "}
                    {/* <Button variant="warning">Ed</Button>{' '} */}
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        handleDelete(user.uid, e, user.name);
                      }}
                    >
                      Borrar
                    </Button>{" "}
                  </td>
                </tr>
                // <Product user={user} key={index} />
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Editar Usuario</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="py-0"><EditProfiles user={user} token={token} /></Modal.Body>
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

export default ManageUsers;
