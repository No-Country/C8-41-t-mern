import React from "react";
//import Sidebar from "./Sidebar";
import SimpleSidebar from "./SimpleSidebar"
import './UserPanel.css'
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { Outlet, Link, redirect } from "react-router-dom";
//import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";


const UserPanel = () => {
    const auth = useSelector(state => state) || ""
    const navigate = useNavigate()  
    console.log(auth)
    Swal.fire("Bienvenido/a!", `${auth.user.name}`, "success")
    console.log(Object.keys(auth.user).length)
    //console.log(state.payload.user)
    if(Object.keys(auth.user).length===0){
       // redirect("/login");
       navigate("/");
       
    }

    //const data = localStorage.getItem('user')
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

export default UserPanel;
