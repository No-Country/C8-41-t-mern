import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateOrders = ({ item }) => {
  console.log(item);

  const token = localStorage.getItem("token");
  console.log(token);

  const [orders, setOrders] = useState({});
  const [alerta, setAlerta] = useState("");

  //   useEffect(() => {
  //      setOrders(item);
  //     // console.log("item is");
  //     // console.log(orders);
  //   }, [item]);

  const handleInput = (e) => {
    setOrders({
      ...orders,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let respuesta;
    let { _id, orderStatus } = item;
    console.log(_id);

    if (!orderStatus) {
      setAlerta(
        <h3 className="alert alert-danger" role="alert">
          El estado de la orden es obligatorio
        </h3>
      );
      setTimeout(() => {
        setAlerta("");
      }, 3000);

      return;
    } else {
      await axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/api/orders/update/${_id}`,
          orders
        )
        .then((resp) => (respuesta = resp.data.name));

      Swal.fire({
        position: "center",
        icon: "success",
        title: `El producto ${respuesta} se ha actualizado de forma exitosa`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div className="login__container">
      <form
        onSubmit={handleSubmit}
        className="login__card"
        style={{ marginTop: "50px" }}
      >
        <h2 className="login__title">Actualizar Estado de Orden</h2>
        {alerta}
        <div className="login__field">
          {/* <i className="input-icon fa-solid fa-user"></i> */}
          <input
            // {...register("name")}
            value={orders.orderStatus}
            autoComplete="on"
            placeholder="Actualizar estado de orden"
            className="login__input-field"
            type="text"
            name="name"
            onChange={handleInput}
            // required={true}
          />
          {/* <i className="input-icon fa-solid fa-user"></i>

          <input
            {...register("lastname")}
            autoComplete="on"
            placeholder="Last Name"
            className="login__input-field"
            type="text"
            id="lastname"
          /> */}
        </div>

        <button
          type="submit"
          className="products__list-item__content-btn__details login__btn"
        >
          Actualizar Estado
        </button>
        {/* <a href="#" className="login__btn-link">
          Already got an account?
        </a> */}
        <i class="register__icon1 register__icon fa-solid fa-masks-theater"></i>
        <i class="register__icon2 register__icon fa-solid fa-masks-theater"></i>
        <i class="register__icon3 register__icon fa-solid fa-masks-theater"></i>
        <i class="register__icon4 register__icon fa-solid fa-masks-theater"></i>
      </form>
    </div>
  );
};

export default UpdateOrders;
