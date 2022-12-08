import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearErrorMessage, onChecking, onEditProfile, onEditMyProfile, onLogin, onLogout, onAddToCart, onDeleteCart} from "../store/slices/auth/authSlice"
import { redirect } from "react-router-dom";

export const useAuthStore = () => {

      const { status, user, errorMessage } = useSelector( state => state )
      let navigate = useNavigate()   
     const dispatch  = useDispatch()
    
     

     const startLogin =  async ({ email, password }) => {
        
        // console.log(email, password)
        dispatch( onChecking() )


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, { email, password })
            // console.log(data)                            
            localStorage.setItem("token", data.token);
            localStorage.setItem("token-init-date", new Date().getTime()); // Podes calcular cuando caduca el token
            localStorage.setItem("user", data.user.name)
            sessionStorage.setItem("user",data.user.name)
            console.log(data);
            dispatch(onLogin({ name: data.user.name, email: data.user.email, uid: data.user.uid, state: data.user.state, phone: data.user.phone, street: data.user.street, zip: data.user.zip, isAdmin: data.user.isAdmin, cart: data.user.cart }))
            navigate("/micuenta");
        } catch (error) {
            let err = error.response.data.error?.map(err => err.msg)
            let err2 = error.response.data.msg
            // console.log(error)
            dispatch( onLogout( `Credenciales incorrectas${ err ? JSON.stringify(err) : JSON.stringify(err2)} ` ) )
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 1000);
           
           
          }

          
        }
        
        const startLogout = async () => {
          dispatch(onLogout())
        }
    
        const startEditProfile = async (perfil) => {
            const token = localStorage.getItem('token')
            // console.log(perfil)
        
                try {
                    const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${perfil.uid}`, perfil, { headers: { 'x-token': ` ${token}` } }  )
                    dispatch(onEditProfile(data))
                    localStorage.setItem("res", 'success')
                    
                } catch (error) {
                    console.log(error)
                    localStorage.setItem("res", error.message)
                }
                // console.log(perfil.uid)
                
        
                
               
            
        }
        const startEditMyProfile = async (perfil, token) => {
            console.log(perfil)
        
                try {
                    const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${perfil.uid}`, perfil, { headers: { 'x-token': ` ${token}` } }  )

                    dispatch(onEditMyProfile(data))
                    localStorage.setItem("res", 'success')
                    
                } catch (error) {
                   
                    console.log(error)
                    localStorage.setItem("res", error.message)
                    
                }
                // console.log(perfil.uid)
                
        }
        const startAddToCart = async (item, id, quantity, token) => {
          
                const cart= {
                    cart: {
                    productID:item._id,
                    productName: item.name,
                    quantity:quantity,

                    }
                    
                }
                
                try {
                    const  {data}  = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/cart/addcart/${id}`, cart, { headers: { 'x-token': ` ${token}` } }  )
                    
                    dispatch(onAddToCart(data))
                    
                    
                } catch (error) {
                   
                    console.log(error)
                   
                    
                }
                
            };
            
            const startDeleteToCart = async (id, idProduct) => {
              console.log(idProduct)
              console.log(id)
              const token = localStorage.getItem('token')
              
            //   const item = {
            //     idProduct: itemId,
            //   } 
                
                try {
                    const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/cart/deletecart/${id}`, { idProduct }, { headers: { 'x-token': ` ${token}` } })
                    console.log("data is")
                    console.log(data)
                    dispatch(onDeleteCart(data))
                } catch (error) {
                    console.log(error)
                    
                }


            }
       

    return {
        // Propiedades
        status, 
        user, 
        errorMessage,
        //Metodos
        startLogin,
        startLogout,
        startEditMyProfile,
        startEditProfile,
        startAddToCart,
        startDeleteToCart
        
        
    }

}