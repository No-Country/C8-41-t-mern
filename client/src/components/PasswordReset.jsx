import { useState } from "react"
import axios from 'axios'
import Swal from "sweetalert2";



const PasswordReset = () => {

  let emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i



    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            setAlerta(
              <h3 className="alert alert-danger" role="alert">
                Debes ingresar un email para recuperar la contraseña
              </h3>
            );
            setTimeout(() => {
              setAlerta('')
            }, 3000);
           return
         }

        // console.log(email)
        if (!emailRegex.test(email)) {
            setAlerta(
              <h3 className="alert alert-danger" role="alert">
                El email ingresao no contiene caracteres válidos
              </h3>
            );
            setTimeout(() => {
              setAlerta('')
            }, 3000);
           return
            
           }

           const enviarEmail = async () => {
              
                try {
                    const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/password-reset`, { email })
                    
                    
                    
                  } catch (error) {
                    console.log(error)
                    
                  }
                  
                  
                  
                }
               setEmail('')

           enviarEmail()
            Swal.fire({
            position: "center",
            icon: "success",
            title: `Se ha enviado un link con instrucciones al mail indicado`,
            showConfirmButton: false,
            timer: 2500,
          });
          
          
          
    }


  return (

    <div className="login__container">
   
    <form
     onSubmit={handleSubmit}
      className="login__card"
      style={{ marginTop: "50px" }}
    >
      <h2 className="login__title">Recuperar contraseña!</h2>
     {alerta}
      <div className="login__field">
        <svg
          className="input-icon"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
        </svg>
        <input
          onChange={(e) => setEmail(e.target.value) }          
          autoComplete="on"
          placeholder="Ingresa tu email para recuperar la contraseña"
          className="login__input-field"
          type="email"
          id="email"
        />
      </div>
      <button type="submit" className="login__btn">
          Enviar
        </button>
      <a href="/register" className="login__btn-link">
          No tienes cuenta?
        </a>
        <a href="/login" className="login__btn-link">
          ya tienes cuenta?
        </a>
      </form>
    </div>
  )
}

export default PasswordReset