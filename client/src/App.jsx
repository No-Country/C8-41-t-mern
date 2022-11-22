// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";

import Register from './components/Register/Register'

import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import AdminPanel from "./components/AdminPanel/AdminPanel";




function App() {
  return (
    <>
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route index element={<Products />} />
          <Route path="detalle/:id" element={<ProductDetail />} />
          <Route path="register" element={<Register />} />
        </Routes>


        {/* Rutas del administrador */}
        <Routes>
          <Route path="admin" element={<AdminPanel />} >
            <Route path="account" element={<h3>Account panel</h3>}/>
            <Route path="inventario" element={ <h3>items</h3>}/>
            <Route path='crear-producto' element={<CreateProduct/>} />
          </Route>
        </Routes>

      <Footer />

    </BrowserRouter>
     

        
    </>
  );
}

export default App;
