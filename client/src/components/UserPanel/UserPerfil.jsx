import React from "react";
//import Sidebar from "./Sidebar";
import SimpleSidebar from "./SimpleSidebar"
import './UserPanel.css'
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { Outlet, Link, redirect } from "react-router-dom";
//import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const UserProfile = () => {

    const auth = useSelector(state => state) || ""
    const navigate = useNavigate()  
    // console.log(auth)
    // console.log(Object.keys(auth.user).length)
    //console.log(state.payload.user)
    

  return (
    <>
    <Container>
         <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Street</th>
              <th>Zip</th>
              
            </tr>
          </thead>
          <tbody>
          <tr>
                  <td>{ auth.user.uid }</td>
                  <td>{ auth.user.name }</td>
                  <td>{ auth.user.email }</td>
                  <td>{ auth.user.phone }</td>
                  <td>{ auth.user.street }</td>
                  <td>{ auth.user.zip }</td>
                 
                  <td>
                  {/* <Link to={`editar`} >
                    <Button variant="success">Edit</Button>{' '}

                  </Link> */}
                 </td>
                
                  
                  
                </tr>
          </tbody>
        </Table>
        </Container>
           
    </>
  )
}

export default UserProfile