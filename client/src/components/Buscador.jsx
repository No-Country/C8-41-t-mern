import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Buscador = () => {

    const navigate = useNavigate()
    
    const [buscar, setBuscar] = useState('')
    

    const handleChange = (e) => {
      
      console.log(e.target.value)
        setBuscar( e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
       

        if ( buscar === '' ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar un producto en el buscador!',
                
              })
        } else {
            console.log('hola')
            navigate(`/detalle-busqueda?encontrar=${buscar}`)
              return
        }



    

    }

  return (
   <>
         <form onSubmit={handleSubmit} className="input-group w-auto my-auto d-none d-sm-flex">
            <input
            value={buscar}
            name="encontrar"
            onChange={handleChange}
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