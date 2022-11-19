import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Buscador = () => {

    // const navigate = useNavigate()
    
    // const [buscar, setBuscar] = useState('')

    // const handleChange = (e) => {
    //     setBuscar( e.target.value)
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(e)

    //     if ( buscar === '' ) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Debes ingresar un producto en el buscador!',
                
    //           })
    //     } else {
    //         console.log('hola')
    //         navigate(`/detalle?buscador=${buscar}`)

    //     }



    

    // }

  return (
   <>
         <form  className="input-group w-auto my-auto d-none d-sm-flex">
            <input
            name="buscar"
            
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder="Buscar Mascara..."
           
            //   style="min-width: 125px;"
            />
            <span className="input-group-text border-0 d-none d-lg-flex trasparent bg-dark "></span>
            <button className="btn btn-success" type="submit" >
        Buscar
      </button> 
      </form>
   </>
  )
}

export default Buscador