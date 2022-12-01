import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useDispatch } from "react-redux";

const SimpleSidebar = () => {

   const { startLogout } = useAuthStore()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleClick = () => {
    dispatch(startLogout)
    navigate('/')
   }

  return (
    <>
      <Nav className="col d-none d-md-block bg-dark sidebar">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link>
            <Link to="/micuenta">Mi Cuenta</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="ordenes">Mis Ordenes</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="perfil">Perfil</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="editar">Editar Perfil</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="mensajes">Mensajes</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1">
           <button className="btn btn-danger" onClick={handleClick} type="submit"  >Cerrar sesion</button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SimpleSidebar;
