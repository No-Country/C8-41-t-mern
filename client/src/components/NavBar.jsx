import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import Buscador from "./Buscador";
import Cart from "./Cart/Cart";
import { CartProvider, useCart } from "react-use-cart";

const NavBar = () => {
  const { startLogout } = useAuthStore();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const auth = useSelector(state => state.auth)
  const auth = useSelector((state) => state) || "";
  let user = auth.user;
  let cartItems = auth.user.cart;
  Object.keys(auth.user).length > 0 ? (user = auth.user) : (user = null);
  const [cart, setCart] = useState([cartItems]);

  // console.log(auth.user)
  const { items, totalItems } = useCart();

  
  const handleClick = () => {
    cartItems = null;
    dispatch(startLogout());
    setCart([...cartItems]);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    // console.log("cart items are...")
    //console.log(auth);

    //console.log(auth.user.cart);
    //auth.user.cart ? setCart(cartItems) : {};
    items? setCart(items) : {};

    //esperando para el componente carrito
    //console.log(cart);

  }, [items]);

  //console.log(state.payload.user)

  const data = localStorage.getItem("user");
  const data2 = sessionStorage.getItem("user");

  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img src="logo.png" alt="mortchikian" />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             {
              user ? <span className="text-white p-2 " ><span className="text-danger">User:</span> {auth.user.name}</span>
                    : ''
             } 
              <Buscador />
              <Nav.Link>
                <Link to="/" className="link">
                  Ver productos
                </Link>
              </Nav.Link>
              {user ? (
                <>
                  <NavDropdown
                    title="Opciones de Usuario"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link
                        to="micuenta"
                        style={{ color: "rgb(255,193,7)", background: "none" }}
                        className="link navBarLink"
                      >
                        Panel de Usuario
                      </Link>
                    </NavDropdown.Item>
                    {user.isAdmin ? (
                      <NavDropdown.Item>
                        <Link
                          to="admin"
                          style={{
                            color: "rgb(255,193,7)",
                            background: "none",
                          }}
                          className="link navBarLink"
                        >
                          Panel Administrativo
                        </Link>
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
              <Link to="cart">
                <button type="button" class="btn btn-warning position-relative">
                  <i className="input-icon text-white fa-solid fa-cart-shopping"></i>

                  {totalItems > 0 ? (
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                    <Link to='/cart' > <span class="visually-hidden">Cart items</span></Link> 
                    </span>
                  ) : (
                    ""
                  )}
                </button>
              </Link>
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
