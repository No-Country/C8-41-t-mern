import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SimpleSidebar = () => {
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
            <Link to="mensajes">Mensajes</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="/">Cerrar Sesión</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SimpleSidebar;
