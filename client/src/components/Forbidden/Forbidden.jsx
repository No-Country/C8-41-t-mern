import React from 'react'
import {Container, Card, Button, Image , Row, Col} from "react-bootstrap";
import "./Forbidden.css"
const Forbidden = () => {
  return (
    <Container className="text-center">
    <Card className="text-center">
      <Card.Header><h2>Acceso Restringido</h2> </Card.Header>
      <Card.Img variant="top" src="http://www.pngkey.com/png/detail/102-1022501_theatre-mask-icon-theatre-masks-png.png" />
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
          No tienes permiso para acceder a la pagina correspondiente
        </Card.Text>
        
      </Card.Body>
      <Card.Footer ><Button variant="warning">Ir al inicio</Button></Card.Footer>
    </Card>
        
    </Container>
  )
}

export default Forbidden