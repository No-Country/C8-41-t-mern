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
import UserProfile from "./components/UserPanel/UserPerfil";
import EditProfile from "./components/UserPanel/EditProfile";





function App() {
  const auth = useSelector((state) => state) || "";
  let user=null;
  let isAdmin=false;

  if (auth.status === "authenticated") {
    user = auth.user;
   isAdmin = auth.user.isAdmin;
    Object.keys(auth.user).length > 0 ? (user = auth.user) : (user = null);
  } else {
    user = null;
    isAdmin = false;
  }

  //user.isAdmin? isAdmin=auth.isAdmin : isAdmin=false;

  

  //console.log(auth.user.isAdmin);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Products />} />
          <Route path="detalle/:id" element={<ProductDetail />} />
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalle-busqueda" element={<DetalleBusqueda />} />
          <Route path="/restringido" element={<Forbidden />} />

          {/* Rutas del Panel de Usuario */}
          <Route
            path="micuenta"
            element={user ? <UserPanel /> : <Navigate to="/login" replace />}
          >
            <Route index element={<h3>Account panel</h3>} />
            <Route path="perfil" element={<UserProfile />} />
            <Route path="editar" element={<EditProfile />} />
            <Route path="ordenes" element={<OrdersList />} />
            <Route path="mensajes" element={<h3>Mis Mensajes</h3>} />
          </Route>
        </Routes>

        {/* Rutas del administrador */}
        <Routes>
          <Route
            path="admin"
            element={
              isAdmin ? <AdminPanel /> : <Navigate to="/restringido" replace />
            }
          >
            <Route index element={<h3>Account panel</h3>} />
            <Route path="inventario" element={<ManageProducts />} />
            <Route path="usuarios" element={<ManageUsers />} />
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
