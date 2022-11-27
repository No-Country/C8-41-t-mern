import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/slices/auth/authSlice"

export const useAuthStore = () => {

      const { status, user, errorMessage } = useSelector( state => state )   
     const dispatch  = useDispatch()
     

     const startLogin =  async ({ email, password }) => {
        
        // console.log(email, password)
        dispatch( onChecking() )


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, { email, password })
            console.log(data)                            
            localStorage.setItem("token", data.token);
            localStorage.setItem("token-init-date", new Date().getTime()); // Podes calcular cuando caduca el token
            localStorage.setItem("user", data.user.name)
            sessionStorage.setItem("user",data.user.name)
            dispatch(onLogin({ name: data.user.name, email: data.user.email, uid: data.user.uid, state: data.user.state, phone: data.user.phone, street: data.user.street, zip: data.user.zip, isAdmin: data.user.isAdmin }))
        
        } catch (error) {
            dispatch( onLogout( 'Credenciales incorrectas' ) )
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 1000);
           
           
          }

     }

    

    return {
        // Propiedades
        status, 
        user, 
        errorMessage,
        //Metodos
        startLogin,
        
    }

}