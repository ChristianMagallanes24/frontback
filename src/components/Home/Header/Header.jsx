import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="frontx">
          <h1 className="titulo-front">Front <br /> and Back</h1>
          <div className="parrafo-container">
            <p>
            Bienvenidos a nuestro portfolio en el cual nos podrás conocer aún más
            </p>
          </div>
        </div>
        <div className="boton-container">
          <Link to="/proyectos" className="btn-proyectos">
            <span className="spn1">Ver proyectos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
