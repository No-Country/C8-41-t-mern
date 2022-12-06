import { useState } from "react";
import axios from "axios";
// import "../Register/Register.css";
import Swal from "sweetalert2";

const AddUsers = () => {
  let regUser = {
    name: "",
    email: "",
    passwordHash: "",
    street: "",
    phone: "",
    zip: "",
    isAdmin:false,
  };
  const [user, setUser] = useState(regUser);
  const [alerta, setAlerta] = useState("");
  const { name, email, passwordHash, street, phone, zip, isAdmin } = user;

  let respuesta;
  let emailRegex =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      [name, email, passwordHash, street, phone, zip, isAdmin].some(
        (inputs) => inputs === ""
      )
    ) {
      setAlerta(
        <h3 className="alert alert-danger" role="alert">
          Todos los campos son obligatorios
        </h3>
      );
      setTimeout(() => {
        setAlerta("");
      }, 3000);
      return;
    }

    if (passwordHash.length < 7) {
      setAlerta(
        <h3 className="alert alert-danger" role="alert">
          El password debe tener como minimo 6 caracteres
        </h3>
      );
      setTimeout(() => {
        setAlerta("");
      }, 3000);
      return;
    }
    if (!emailRegex.test(email)) {
      setAlerta(
        <h3 className="alert alert-danger" role="alert">
          El email ingresao no contiene caracteres válidos
        </h3>
      );
      setTimeout(() => {
        setAlerta("");
      }, 3000);
      return;
    }

    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/users`;

    await axios
      .post(URL, user)
      .then((res) => {
        respuesta = res.data.name;
        Swal.fire({
          position: "center",
          icon: "success",
          title: `El usuario ${respuesta} fue creado de forma exitosa`,
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: `El usuario no ha sido creado. Error: ${err} a`,
          showConfirmButton: false,
          timer: 2500,
        });
        //Swal.fire('El usuario no ha sido eliminado', '', 'info');
        console.log(err);
      });

    setUser(
      (regUser = {
        name: "",
        email: "",
        passwordHash: "",
        street: "",
        phone: "",
        zip: "",
        isAdmin:false,
      })
    );
  };

  return (
    <div className="login__container">
      <form
        onSubmit={handleSubmit}
        className="login__card"
        style={{ marginTop: "50px" }}
      >
        {alerta}
        <h2 className="login__title">Crear Usuario</h2>
        <div className="login__field">
          <i className="input-icon fa-solid fa-user"></i>
          <input
            value={user.name}
            name="name"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Full Name"
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
            value={user.email}
            name="email"
            onChange={handleInputChange}
            autoComplete="off"
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
            value={user.passwordHash}
            name="passwordHash"
            onChange={handleInputChange}
            autoComplete="off"
            type="password"
            placeholder="Password"
            className="login__input-field"
            id="passwordHash"
          />
        </div>
        <div className="login__field">
          <i className="input-icon fa-solid fa-phone"></i>
          <input
            value={user.phone}
            name="phone"
            onChange={handleInputChange}
            type="number"
            placeholder="Telefono"
            className="login__input-field"
            id="phone"
          />
        </div>
        <div className="login__field">
          <i className="input-icon fa-solid fa-home"></i>
          <input
            value={user.street}
            name="street"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Domicilio"
            className="login__input-field"
            id="street"
          />
        </div>
        <div className="login__field">
          <i className="input-icon fa-solid fa-home"></i>
          <input
            value={user.zip}
            name="zip"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Codigo Postal"
            className="login__input-field"
            type="number"
            id="zip"
          />
        </div>
        <div className="login__field">
        <i className="input-icon fa-solid fa-house"></i>
        <select className="login__input-field" onChange={handleInputChange} 
        aria-label="Default select user" name="isAdmin"
          id="isAdmin">
        <option selected>Seleccione Tipo de Usuario</option>
        <option value={false}>Usuario Normal</option>
        <option value={true} >Usuario Administrador</option>
        </select>

      </div>

        <button className="login__btn" type="submit">
          Register
        </button>
        <a href="/login" className="login__btn-link">
          Already got an account?
        </a>
        <i className="register__icon1 register__icon fa-solid fa-masks-theater"></i>
        <i className="register__icon2 register__icon fa-solid fa-masks-theater"></i>
        <i className="register__icon3 register__icon fa-solid fa-masks-theater"></i>
        <i className="register__icon4 register__icon fa-solid fa-masks-theater"></i>
      </form>
    </div>
  );
};

export default AddUsers;
