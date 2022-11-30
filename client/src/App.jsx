// import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import Register from "./components/Register/Register";
import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ManageProducts from "./components/AdminPanel/ManageProducts";
import UpdateProduct from "./components/UpdateProduct";
import UserPanel from "./components/UserPanel/UserPanel";
import OrdersList from "./components/UserPanel/OrdersList";
import Login from "./components/Login";
import Forbidden from "./components/Forbidden/Forbidden";
import DetalleBusqueda from "./components/DetalleBusqueda";
import { useAuthStore } from "./hooks/useAuthStore";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import UserPerfil from "./components/UserPanel/UserPerfil";


function App() {

  const auth = useSelector(state => state) || "";
  let user = auth.user;
  console.log("user is admin? "+user.isAdmin);
  Object.keys(auth.user).length>0? user=auth.user : user=null;
  console.log(user)
 
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Products />} />
          <Route path="detalle/:id" element={<ProductDetail />} />
          <Route path="register" element={<Register />} />
          <Route path='/login'  element={<Login/>}  />
          <Route path="/detalle-busqueda" element={ <DetalleBusqueda /> } />
          <Route path="/restringido" element={<Forbidden/>} />
          
         {/* Rutas del Panel de Usuario */}
          <Route path="micuenta"  element={user?<AdminPanel /> : <Navigate to="/login" replace/>}>
            <Route index element={<h3>Account panel</h3>} />
            <Route path="perfil" element={<UserPerfil />} />
            <Route path="ordenes" element={<OrdersList />} />
            <Route path="mensajes" element={<h3>Mis Mensajes</h3>} />
          </Route>
        </Routes>

        {/* Rutas del administrador */}
        <Routes>
          <Route path="admin" element={user.isAdmin? <UserPanel />: <Navigate to="/restringido" replace/>} >
            <Route index element={<h3>Account panel</h3>} />
            <Route path="inventario" element={<ManageProducts />} />
            <Route path="usuarios" element={<h3>usuarios</h3>} />
            <Route path="crear-producto" element={<CreateProduct />} />
            <Route path="editar-producto" element={<UpdateProduct />} />
          </Route>
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
