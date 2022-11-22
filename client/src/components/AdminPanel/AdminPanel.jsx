import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";




const AdminPanel = () => {
  return (
    <>
      <div>AdminPanel</div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
            <Link to="account">Invoices</Link> |{" "}
            <Link to="inventario">Expenses</Link>
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPanel;
