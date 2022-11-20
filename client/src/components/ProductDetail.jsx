import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetail = () => {

    const { id } = useParams()
   console.log(typeof(id))

   const [oneProduct, setOneProduct] = useState('')

    useEffect(() => {

      const url = `http://localhost:4000/api/products/${id}`
      
      axios.get(url)
          .then(res => setOneProduct(res.data))
          .catch(err => console.log(err))
      
    }, [])

    console.log(oneProduct)
    

  return (
    <Container  >
       <Row className="justify-content-md-center">
       <Col md="auto">
       <Card className='my-2 mx-2 w-50  ' >
      <Card.Img variant="top" src={oneProduct.image} />
      <Card.Body>
        <Card.Title className='text-dark fw-bold ' > Nombre: <span className='fw-semibold'> {oneProduct.name} </span> </Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>  <Card.Text className='text-dark fw-bold ' > Descripcion del producto: <span className='fw-semibold'> {oneProduct.description} </span> </Card.Text> </ListGroup.Item>
        <ListGroup.Item className='text-dark fw-bold ' > Precio:  <span className='text-danger' > ${oneProduct.price}</span></ListGroup.Item>
        <ListGroup.Item className='text-dark fw-bold ' > Tiempo estimado de Demora:  <span className='text-success' > {oneProduct.delay}</span></ListGroup.Item>
        <ListGroup.Item className='text-dark fw-bold ' > Stock:  <span className='text-primary' > {oneProduct.sold}</span></ListGroup.Item>
       
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
      </Card>
        </Col>
      </Row>
      <Link to='/' >
        <button className="btn btn-success mb-2 " >
          Volver
        </button>
      </Link>
    </Container>
  )
}

export default ProductDetail