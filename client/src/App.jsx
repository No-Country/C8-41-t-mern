// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";

import Register from './components/Register/Register'

import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";

import AdminPanel from "./components/AdminPanel/AdminPanel";
import ManageProducts from "./components/AdminPanel/ManageProducts";

import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";





function App() {
  return (
    <>
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route index element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="detalle/:id" element={<ProductDetail />} />

          <Route path="register" element={<Register />} />
        </Routes>


        {/* Rutas del administrador */}
        <Routes>

          <Route path="admin" element={<AdminPanel />} >
            <Route index element={<h3>Account panel</h3>}/>
            <Route path="inventario" element={ <ManageProducts />}/>
            <Route path="usuarios" element={ <h3>usuarios</h3>}/>
            <Route path='crear-producto' element={<CreateProduct/>} />
          </Route>

          <Route path='/admin/crear-producto' element={<CreateProduct/>} />
          <Route path='/admin/editar-producto' element={<UpdateProduct/>} />

        </Routes>

      <Footer />

    </BrowserRouter>
     

        
    </>
  );
}

export default App;
