import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const DetalleBusqueda = () => {

    const [detalleBusqueda, setDetalleBusqueda] = useState([])
    const [alerta, setAlerta] = useState('')

    const busqueda = window.location.search; // Es la forma de obtener el valor por params de la url
    console.log(detalleBusqueda)

    
    useEffect(() => {

            
       
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/search/${busqueda}`   )
            .then( res => setDetalleBusqueda(res.data) )
            .catch(error => console.log(error))
            
        
        }, [])

    
       

  return (
    <>  
    <div className="products">

    <ul className="products__list">
      {
            detalleBusqueda?.map((busqueda => {
                return (
                    <li className="products__list-item">
                        <div className="products__list-item__img">
                        <img src={busqueda.image} alt={busqueda.name} />
                        </div>
                        <div className="products__list-item__content">
                        <h2>{busqueda.name}</h2>
                        <p>{busqueda.description}</p>
                        <div className="products__list-item__content-btn">
                            <p>{busqueda.price}</p>
                            <button>BUY NOW</button>
                            <Link to={`/detalle/${busqueda._id}`}>
                            <button>Ver detalle</button>
                            </Link>
                        </div>
                        </div>
                    </li>
     
                )
            }))

      }
      </ul>
   <Link to='/' >
        <button className="btn btn-success mx-2 my-2 " >
          Volver
        </button>
      </Link>
   </div>
    </>
  )
}

export default DetalleBusqueda