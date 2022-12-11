import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleBusqueda = () => {
  const [detalleBusqueda, setDetalleBusqueda] = useState([]);
  const [alerta, setAlerta] = useState("");

  const busqueda = window.location.search; // Es la forma de obtener el valor por params de la url
  console.log(detalleBusqueda);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/search/${busqueda}`)
      .then((res) => setDetalleBusqueda(res.data))
      .catch((error) => console.log(error));
  }, [detalleBusqueda]);

  return (
    <>
      <div className="products">
        <ul className="products__list">
          {detalleBusqueda?.map((item) => {
            return (
              <li className="products__list-item">
                <div className="products__list-item__img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="products__list-item__content">
                  <h2 className="products__list-item__content-title">
                    {item.name}
                  </h2>
                  <p className="products__list-item__content-description">
                    {item.description}
                  </p>
                  <div className="products__list-item__content-extra">
                    <p>${item.price}</p>
                    <div className="products__list-item__content-extra__stars">
                      <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
                      <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
                      <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
                      <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
                      <i className="products__list-item__content-extra__stars-star fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="products__list-item__content-btn">
                    <button className="products__list-item__content-btn__buy">
                      Comprar
                    </button>
                    <Link to={`/detalle/${busqueda._id}`}>
                      <button className="products__list-item__content-btn__details">
                        Detalles
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Link to="/">
          <button
            style={{
              background: "rgb(255,193,7)",
              border: "1px solid rgb(255,193,7)",
            }}
            className="btn btn-success mx-2 my-2 "
          >
            Volver
          </button>
        </Link>
      </div>
    </>
  );
};

export default DetalleBusqueda;
