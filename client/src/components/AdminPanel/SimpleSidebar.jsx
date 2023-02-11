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
            <Link to="/admin" className="link">
              Mi Cuenta
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="inventario" className="link">
              Inventario
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="usuarios" className="link">
              Usuarios
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to="crear-producto" className="link">
              Crear Producto
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to="ordenes-usuarios" className="link">
              Mostrar ordenes
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SimpleSidebar;
