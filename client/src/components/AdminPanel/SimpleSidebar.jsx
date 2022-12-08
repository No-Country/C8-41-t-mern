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
          <Nav.Link eventKey="link-1" className="link">
            <Link to="usuarios">Usuarios</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="link">
            <Link to="crear-producto">Crear Producto</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SimpleSidebar;
