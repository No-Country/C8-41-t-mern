import React from 'react'
import {Container, Image, Row, Col} from "react-bootstrap";

const Forbidden = () => {
  return (
    <Container>
        <Row>
        <Col><Image src="http://www.pngkey.com/png/detail/102-1022501_theatre-mask-icon-theatre-masks-png.png" className='img-thumbnail' rounded fluid/>
        <h2 clasName="text-center">Acceso Restringido</h2></Col>
        </Row>
        
        
    </Container>
  )
}

export default Forbidden