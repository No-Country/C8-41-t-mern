import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";

const EditProfiles = ({ user }) => {
  const { startEditProfile } = useAuthStore();
  const auth = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  // console.log("token is "+token);
  const [perfil, setPerfil] = useState({});
  let response = "";

  useEffect(() => {
    setPerfil(user);
  }, []);

  const handleInputChange = (e) => {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    startEditProfile(perfil, token).then(async () => {
      console.log("response is...");
      console.log(response);
      response = localStorage.getItem("res");
      if (response === "success") {
        await Swal.fire(
          "¡Exito!",
          `El usuario ${user.name} ha sido actualizado de forma exitosa`,
          "success"
        );
      } else {
        await Swal.fire("¡Ha ocurrido un Error!", `${response}`, "warning");
      }
    });
    localStorage.setItem("res", "");
  };

  return (
    <>
      <div className="login__container" style={{ marginBottom: "20px" }}>
        <form
          onSubmit={handleSubmit}
          className="login__card"
          style={{ marginTop: "50px" }}
        >
          <h2 className="login__title">Editar Perfil!</h2>
          <div className="login__field">
            <i className="input-icon fa-solid fa-user"></i>
            <input
              value={perfil.name || ""}
              name="name"
              onChange={handleInputChange}
              autoComplete="on"
              placeholder="Full name"
              className="login__input-field"
              type="text"
              id="name"
            />
          </div>

          <div className="login__field">
            <svg
              className="input-icon"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
            </svg>
            <input
              value={perfil.email || ""}
              onChange={handleInputChange}
              name="email"
              autoComplete="on"
              placeholder="Email"
              className="login__input-field"
              type="email"
              id="email"
            />
          </div>
          <div className="login__field">
            <svg
              className="input-icon"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
            </svg>
            <input
              value={perfil.password || ""}
              onChange={handleInputChange}
              autoComplete="off"
              type="password"
              placeholder="Password"
              className="login__input-field"
              name="password"
              id="password"
            />
          </div>
          <div className="login__field">
            <i className="input-icon fa-solid fa-phone"></i>
            <input
              value={perfil.phone || ""}
              onChange={handleInputChange}
              autoComplete="off"
              type="tel"
              placeholder="Cellphone"
              className="login__input-field"
              name="phone"
              id="cellphone"
            />
          </div>
          <div className="login__field">
            <i className="input-icon fa-solid fa-house"></i>
            <input
              value={perfil.street || ""}
              onChange={handleInputChange}
              autoComplete="off"
              type="text"
              placeholder="Street"
              className="login__input-field"
              name="street"
              id="street"
            />
          </div>
          {/* <div className="login__field">
        <i className="input-icon fa-solid fa-house"></i>
        <input
          value={perfil.isAdmin || ''}
          onChange={handleInputChange}
          autoComplete="off"
          type="text"
          placeholder="Admin state"
          className="login__input-field"
          name="isAdmin"
          id="isAdmin"
        />
      </div> */}
          <div className="login__field">
            <i className="input-icon fa-solid fa-house"></i>
            <select
              className="login__input-field"
              onChange={handleInputChange}
              aria-label="Default select user"
              name="isAdmin"
              id="isAdmin"
            >
              <option>Seleccione Tipo de Usuario</option>
              <option value={false} selected={perfil.isAdmin ? "" : true}>
                Usuario Normal
              </option>
              <option value={true} selected={perfil.isAdmin ? true : ""}>
                Usuario Administrador
              </option>
            </select>
          </div>

          <button
            className="products__list-item__content-btn__details login__btn"
            type="submit"
          >
            Actualizar Perfil
          </button>
          {/* <a href="#" className="login__btn-link">
        Already got an account?
      </a> */}
          <i className="register__icon1 register__icon fa-solid fa-masks-theater"></i>
          <i className="register__icon2 register__icon fa-solid fa-masks-theater"></i>
          <i className="register__icon3 register__icon fa-solid fa-masks-theater"></i>
          <i className="register__icon4 register__icon fa-solid fa-masks-theater"></i>
        </form>
      </div>
    </>
  );
};

export default EditProfiles;
