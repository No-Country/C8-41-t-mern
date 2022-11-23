import React from 'react'
import SidebarMenu from "react-bootstrap-sidebar-menu"
import { Outlet, Link } from "react-router-dom"; 

const Sidebar = () => {
  return (
    <SidebarMenu bg="dark">
    <SidebarMenu.Header>
      <SidebarMenu.Brand>{/* Your brand icon */}</SidebarMenu.Brand>
      <SidebarMenu.Toggle />
      Panel de Administración
    </SidebarMenu.Header>
    <SidebarMenu.Body>
    <Link to="account">Invoices</Link> |{" "}
    <Link to="inventario">Expenses</Link>
    <Link to="crear-cuenta">Expenses</Link>
      <SidebarMenu.Nav>
        <SidebarMenu.Nav.Link>
          <SidebarMenu.Nav.Icon>
            {/* Menu item icon */}
          </SidebarMenu.Nav.Icon>
          <SidebarMenu.Nav.Title>
            {/* Menu item title */}
            
            
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
      </SidebarMenu.Nav>
      <SidebarMenu.Sub>
        <SidebarMenu.Sub.Toggle>
          <SidebarMenu.Nav.Icon />
          <SidebarMenu.Nav.Title>
            {/* Submenu title */}
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Sub.Toggle>
        <SidebarMenu.Sub.Collapse>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Icon>
                {/* Submenu item icon */}
              </SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>
                {/* Submenu item title */}
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
          </SidebarMenu.Nav>
        </SidebarMenu.Sub.Collapse>
      </SidebarMenu.Sub>
    </SidebarMenu.Body>
  </SidebarMenu>
  )
}

export default Sidebar