import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import Buscador from "./Buscador"


const NavBar = () => {

     const { startLogout } = useAuthStore()
     const dispatch = useDispatch()
     const navigate = useNavigate()

    // const auth = useSelector(state => state.auth)
    const auth = useSelector(state => state) || "";
    let user = auth.user;
    Object.keys(auth.user).length>0? user=auth.user : user=null;

    const handleClick = () => {
      dispatch(startLogout())

    }

    const handleLogin = () => {

      navigate("/login")
    }

  
    // console.log(state.payload.user)
    

  const data = localStorage.getItem('user')
  const data2 = sessionStorage.getItem('user')

  return (
    <>
    {/* <!-- Navbar --> */}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{auth.user.name}</Nav.Link>
            <Nav.Link href="/">Ver productos</Nav.Link>
            {
              user ? <>
            <NavDropdown title="Opciones de Usuario" id="collasible-nav-dropdown">
              <NavDropdown.Item href="micuenta">Panel de Usuario</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

              </>
              :
              ""
              
              
            
            
            }
          </Nav>
              <Buscador/>
          <Nav>
          {
            user ?
            <button className='btn btn-danger mx-2' onClick={handleClick} >
              Cerrar Sesion
            </button>
            :
            <button className='btn btn-primary' onClick={handleLogin}>
              Iniciar Sesion
            </button>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

export default NavBar