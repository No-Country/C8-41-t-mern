import React from 'react';


 const Footer= () => {
  return (
    <>
            {/* Footer */}
        <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
            {/* Twitter */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
            {/* Google */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a>
            {/* Instagram */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
            {/* Linkedin */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
            {/* Github */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!" role="button"><i className="fab fa-github" /></a>
            </section>
            {/* Section: Social media */}
            {/*<!-- Section: Links  -->*/}
            <section className>
            <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />Sobre Nosotros
                    </h6>
                    <p>
                    Ecommerce Artistico es una tienda en linea dedicada a vender la mas variada seleccion de mascaras para el teatro, fiestas y cualquier otro evento artistico.
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                    Productos
                    </h6>
                    <p>
                    <a href="#!" className="text-reset">Mascaras de Teatro</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Mascaras - Halloween</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Mascaras de Fiesta</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Mascaras de Navidad</a>
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                    Enlaces
                    </h6>
                    <p>
                    <a href="#!" className="text-reset">Inicio</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Productos</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Contacto</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Sobre Nosotros</a>
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                    <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                    <p>
                    <i className="fas fa-envelope me-3" />
                    info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                </div>
                {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            </section>
            {/* Section: Links  */}

            {/* Section: Text */}
            <section className="mb-4">
            <p>
                ¡Gracias por Visitar nuestro Sitio!
            </p>
            </section>
            {/* Section: Text */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3 bg-dark text-center text-white" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2022 Copyright: 
            <a className="text-white" href="#"> C8-41-T-MERN</a>
        </div>
        {/* Copyright */}
        </footer>
        {/* Footer */}

    </>
  );
}

export default Footer