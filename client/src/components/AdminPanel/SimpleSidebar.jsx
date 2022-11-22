import React from 'react'
import { Outlet, Link } from "react-router-dom";

const SimpleSidebar = () => {
  return (
    <>
    <div>SimpleSidebar</div>
    <Link to="account">Inventario</Link> |{" "}
    <Link to="inventario">Usuarios</Link>
    <Link to="crear-producto">Crear Item</Link>
    </>
  )
}

export default SimpleSidebar