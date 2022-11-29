// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import Register from "./components/Register/Register";
import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import UserPanel from "./components/UserPanel/UserPanel";
import ManageProducts from "./components/AdminPanel/ManageProducts";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import DetalleBusqueda from "./components/DetalleBusqueda";
import { useAuthStore } from "./hooks/useAuthStore";
import { useEffect } from "react";

function App() {


  

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
          <Route path="micuenta" element={<UserPanel />}>
            <Route index element={<h3>Account panel</h3>} />
            <Route path="ordenes" element={<h3>Mis Ordenes</h3>} />
            <Route path="mensajes" element={<h3>Mis Mensajes</h3>} />
        
          </Route>
        </Routes>

        {/* Rutas del administrador */}
        <Routes>
          <Route path="admin" element={<AdminPanel />}>
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
