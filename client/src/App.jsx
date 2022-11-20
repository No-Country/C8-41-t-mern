// import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";

import ProductDetail from './components/ProductDetail';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes  >
          <Route path='/' element={<Products />} />
          <Route  path='/detalle/:id' element={ <ProductDetail /> } />
        </Routes>

        {/* Rutas del administrador */}
        <Routes>
          <Route path='/admin/crear-producto' element={<CreateProduct/>} />
        </Routes>

      <Footer />
    </BrowserRouter>
     
    </>
  );
}

export default App;
