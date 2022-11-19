// import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import DetalleMascara from './components/DetalleMascara';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes  >
          <Route path='/' element={<Products />} />
          <Route  path='/detalle/:id' element={ <DetalleMascara /> } />
        </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  );
}

export default App;
