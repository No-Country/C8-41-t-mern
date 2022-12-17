import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          {/* Section: Social media */}
          {/*<!-- Section: Links  -->*/}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4 footer-title">
                    <i className="fas fa-gem me-3" />
                    Sobre Nosotros
                  </h6>
                  <p className="link">
                    Ecommerce Artistico es una tienda en linea dedicada a vender
                    la mas variada seleccion de mascaras para el teatro, fiestas
                    y cualquier otro evento artistico.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4 footer-title">
                    Productos
                  </h6>
                  <p className="link">
                    <a>Mascaras - Teatro</a>
                  </p>
                  <p className="link">
                    <a>Mascaras - Halloween</a>
                  </p>
                  <p className="link">
                    <a>Mascaras - Fiesta</a>
                  </p>
                  <p className="link">
                    <a>Mascaras - Navidad</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4 footer-title">
                    Enlaces
                  </h6>
                  <p>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="register" className="link">
                      Registrate
                    </Link>
                  </p>
                  <p>
                    <Link to="login" className="link">
                      Inicia sesión
                    </Link>
                  </p>
                  <p>
                    <Link to="cart" className="link">
                      Cart
                    </Link>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links  */}
                  <h6 className="text-uppercase fw-bold mb-4 footer-title">
                    Contacto
                  </h6>
                  <p className="link">
                    <i className="fas fa-home me-3" /> Buenos Aires, Argentina AR
                  </p>
                  <p className="link">
                    <i className="fas fa-envelope me-3" />
                    mortchikteatro@gmail.com
                  </p>
                  <p className="link">
                    <i className="fas fa-phone me-3" /> + 11 5503-7467
                  </p>
                  {/* <p className="link">
                    <i className="fas fa-print me-3" /> + 01 234 567 89
                  </p> */}
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}

          {/* Section: Text */}
          <section
            className="mb-2 mt-4 footer-title"
            style={{ fontSize: "22px", letterSpacing: "1.5px" }}
          >
            <p>¡Gracias por Visitar nuestro Sitio!</p>
          </section>
          {/* Section: Text */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3 bg-dark text-center text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="#">
            {" "}
            C8-41-T-MERN
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
