import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import product from "./Products/dummyData.json";
import "./productDetail/productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(typeof id);

  const [oneProduct, setOneProduct] = useState("");

  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`;

    axios
      .get(url)
      .then((res) => setOneProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(oneProduct);

  return (
    <div className="productDetailsWrapper">
      <div className="productDetails">
        <div className="productDetails__img">
          <img
            className="productDetails__img-image"
            src={oneProduct.image}
            alt=""
          />
        </div>
        <div className="productDetails__content">
          <div className="productDetails__content-label">Nuevo</div>
          <div className="productDetails__content-name">{oneProduct.name}</div>
          <div className="productDetails__content-description">
            <h2 className="productDetails__content-description-title">
              Descripción:
            </h2>
            {oneProduct.description}
          </div>
          <div className="productDetails__content-details">
            <div className="productDetails__content-details__price">
              ${oneProduct.price}
            </div>
            <div className="productDetails__content-details__stock">
              Stock: {oneProduct.sold}
            </div>
          </div>
          <div className="productDetails__content-delay">
            <h2 className="productDetails__content-description-title">
              Tiempo de entrega:
            </h2>
            {oneProduct.delay}
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="products__list-item__content-btn__details mx-2 my-2 ">
          Volver
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;
{
  /* <Container>
  <Row className="justify-content-md-center">
    <Col md="auto">
      <Card className="my-2 mx-2 w-50  ">
        <Card.Img variant="top" src={oneProduct.image} />
        <Card.Body>
          <Card.Title className="text-dark fw-bold ">
            {" "}
            Nombre: <span className="fw-semibold">
              {" "}
              {oneProduct.name}{" "}
            </span>{" "}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {" "}
            <Card.Text className="text-dark fw-bold ">
              {" "}
              Descripcion del producto:{" "}
              <span className="fw-semibold">
                {" "}
                {oneProduct.description}{" "}
              </span>{" "}
            </Card.Text>{" "}
          </ListGroup.Item>
          <ListGroup.Item className="text-dark fw-bold ">
            {" "}
            Precio: <span className="text-danger"> ${oneProduct.price}</span>
          </ListGroup.Item>
          <ListGroup.Item className="text-dark fw-bold ">
            {" "}
            Tiempo estimado de Demora:{" "}
            <span className="text-success"> {oneProduct.delay}</span>
          </ListGroup.Item>
          <ListGroup.Item className="text-dark fw-bold ">
            {" "}
            Stock: <span className="text-primary"> {oneProduct.sold}</span>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  <Link to="/">
    <button className="products__list-item__content-btn__details mx-2 my-2 ">
      Volver
    </button>
  </Link>
</Container>; */
}
