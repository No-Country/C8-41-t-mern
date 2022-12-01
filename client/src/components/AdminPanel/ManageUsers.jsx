import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import Product from "../Products/Product";
import { Link } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

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
    console.log("users are...");
    console.log(users);
    // setProducts({...products});
  }, [users]);

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
              console.log("user is...");
              console.log(user);
              return (
                <tr key={user.id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  {/* <td>{checkStock(user.stock)}</td> */}
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.isAdmin? 'Si' : 'No'}</td>
                  <td>
                    <Button variant="success">Editar</Button>{" "}
                    {/* <Button variant="warning">Ed</Button>{' '} */}
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        handleDelete(user._id, e, user.name);
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
    </>
  );
};

export default ManageUsers;
