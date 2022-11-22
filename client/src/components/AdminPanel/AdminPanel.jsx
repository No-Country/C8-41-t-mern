import React from "react";
//import Sidebar from "./Sidebar";
import SimpleSidebar from "./SimpleSidebar"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";




const AdminPanel = () => {
  return (
    <>
      <div>AdminPanel</div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SimpleSidebar />
            
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
