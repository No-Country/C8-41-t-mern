// import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthStore } from "./hooks/useAuthStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import Register from "./components/Register/Register";
import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ManageProducts from "./components/AdminPanel/ManageProducts";
import ManageUsers from "./components/AdminPanel/ManageUsers";
import UpdateProduct from "./components/UpdateProduct";
import UserPanel from "./components/UserPanel/UserPanel";
import OrdersList from "./components/UserPanel/OrdersList";
import Login from "./components/Login";
import Forbidden from "./components/Forbidden/Forbidden";
import DetalleBusqueda from "./components/DetalleBusqueda";
import UserProfile from "./components/UserPanel/UserProfile";
import EditProfile from "./components/UserPanel/EditProfile";
import PasswordReset from "./components/PasswordReset";
import NewPassword from "./components/NewPassword";
import MyProfile from "./components/UserPanel/MyProfile";
import Cart from "./components/Cart/Cart";
import CheckoutResult from "./components/Checkout/CheckoutResult";
import Checkout from "./components/Checkout/Checkout";
import AdminProfile from "./components/AdminPanel/AdminProfile";
import ChangePass from "./components/UserPanel/ChangePass";
import Operation from "./components/operation/Operation";
import OrdersUser from "./components/AdminPanel/OrdersUser";
import UpdateOrders from "./components/UpdateOrders";

function App() {
  const auth = useSelector((state) => state) || "";
  let user = null;
  let isAdmin = false;

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
          <Route path="login" element={<Login />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="newpassword/:id" element={<NewPassword />} />
          <Route path="cart" element={<Cart />} />

          <Route path="checkout" element={<Checkout />}>
            <Route
              path="result"
              element={
                user ? <CheckoutResult /> : <Navigate to="/login" replace />
              }
            />
          </Route>
          <Route path="operation" element={<Operation />} />
          <Route path="detalle-busqueda" element={<DetalleBusqueda />} />
          <Route path="restringido" element={<Forbidden />} />

          {/* Rutas del Panel de Usuario */}
          <Route
            path="micuenta"
            element={user ? <UserPanel /> : <Navigate to="/login" replace />}
          >
            <Route index element={<UserProfile />} />
            <Route path="editar" element={<EditProfile />} />
            <Route path="ordenes" element={<OrdersList />} />
            <Route path="change-password" element={<ChangePass />} />
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
            <Route index element={<AdminProfile />} />
            <Route path="inventario" element={<ManageProducts />} />
            <Route path="usuarios" element={<ManageUsers />} />
            <Route path="crear-producto" element={<CreateProduct />} />
            <Route path="editar-producto" element={<UpdateProduct />} />
            <Route path="ordenes-usuarios" element={<OrdersUser />} />
            <Route path="actualizar-ordenes" element={<UpdateOrders />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
