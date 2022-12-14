import React from "react";
//import Sidebar from "./Sidebar";
import SimpleSidebar from "./SimpleSidebar"
import './AdminPanel.css'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";




const AdminPanel = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col  id="sidebar-wrapper">
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
