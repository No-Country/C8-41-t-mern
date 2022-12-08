import React from "react";
//import Sidebar from "./Sidebar";
import SimpleSidebar from "./SimpleSidebar";
import "./UserPanel.css";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
  Table,
  Modal,
  Stack,
} from "react-bootstrap";
import { Outlet, Link, redirect } from "react-router-dom";
//import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const auth = useSelector((state) => state) || "";
  const navigate = useNavigate();
  // console.log(auth)
  // console.log(Object.keys(auth.user).length)
  //console.log(state.payload.user)

  return (
    <>
      <Container className="text-center">
        <h1>Bienvenido {auth.user.name}</h1>
        <Row>
          <Col clasName="d-flex">
            <Card>
              <Card.Img
                style={{ width: "18rem", borderRadius: "50%" }}
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Mi Perfil</Card.Title>
                {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>id de Usuario: {auth.user.uid}</ListGroup.Item>
                <ListGroup.Item>Nombre: {auth.user.name}</ListGroup.Item>
                <ListGroup.Item>Email: {auth.user.email}</ListGroup.Item>
                <ListGroup.Item>Telefono: {auth.user.phone}</ListGroup.Item>
                <ListGroup.Item>Direccion: {auth.user.street}</ListGroup.Item>
                <ListGroup.Item>Usuario desde</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        {/* Esta seccion solo aparecera cuando la sidebar desaparezca */}
        <h3 className="d-md-none">Selecciona una Opción</h3>
        <Row className="d-md-none">
          <Col>
            <Card style={{ width: "18rem" }} className="text-center">
              <Card.Header>
                <h4>Mis ordenes</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Accede facilmente a las ordenes de tus compras pasadas
                </Card.Text>
                <Button
                  variant="warning"
                  className="products__list-item__content-btn__details"
                >
                  Ir a ordenes
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="text-center">
              <Card.Header>
                <h4>Editar Perfil</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Edita tu información personal para que este siempre al dia
                </Card.Text>
                <Button
                  variant="warning"
                  className="products__list-item__content-btn__details"
                >
                  Ir a Editar Perfil
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="text-center">
              <Card.Header>
                <h4>Mensajes</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Accede a los ultimos mensajes con el comprador
                </Card.Text>
                <Button
                  variant="warning"
                  className="products__list-item__content-btn__details"
                >
                  Ir a Mensajes
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Esta seccion solo aparecera cuando la sidebar desaparezca */}
      </Container>
    </>
  );
};

export default UserProfile;
