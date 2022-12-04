import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import Buscador from "./Buscador";

const NavBar = () => {
  const { startLogout } = useAuthStore();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const auth = useSelector(state => state.auth)
  const auth = useSelector((state) => state) || "";
  let user = auth.user;
  Object.keys(auth.user).length > 0 ? (user = auth.user) : (user = null);
  const [cart, setCart]=useState([{}]);
  const handleClick = () => {
    dispatch(startLogout());
  };

  const handleLogin = () => {
    navigate("/login");
  };
useEffect(() => {
  
  auth.user.cart? setCart(auth.user.cart) : setCart([{}]);
  //esperando para el componente carrito
  console.log(cart);
  
}, [cart])

  //console.log(state.payload.user)

  const data = localStorage.getItem("user");
  const data2 = sessionStorage.getItem("user");

  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            Ecommerce <br /> Artistico
          </Navbar.Brand>
         
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">{auth.user.name}</Nav.Link>
            <Buscador />
              <Nav.Link href="/">Ver productos</Nav.Link>

              {user ? (
                <>
                  <NavDropdown
                    title="Opciones de Usuario"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/micuenta">
                      Panel de Usuario
                    </NavDropdown.Item>
                    {user.isAdmin ? (
                      <NavDropdown.Item href="/admin">
                        Panel Administrativo
                      </NavDropdown.Item>
                    ) : (
                      ""
                    )}
                    {/* 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
                  </NavDropdown>
                </>
              ) : (
                ""
              )}
            </Nav>

            <Stack direction="horizontal" gap={3}>
              {/* <Nav> */}
                <button type="button" class="btn btn-warning position-relative">
                  <i className="input-icon text-white fa-solid fa-cart-shopping"></i>
                  {cart.length>1?<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}<span class="visually-hidden">Cart items</span>
                  </span>: ''}
                </button>
              {/* </Nav> */}
              {/* <vr /> */}
              {/* <Nav> */}
                {user ? (
                  <button className="btn btn-danger" onClick={handleClick}>
                    Cerrar Sesion
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleLogin}>
                    Iniciar Sesion
                  </button>
                )}
              {/* </Nav> */}
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
