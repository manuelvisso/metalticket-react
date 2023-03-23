import React from "react";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Eventos</a>
        </li>
        <li>
          <a>Iniciar Sesión</a>
        </li>
        <li>Carrito</li>
      </ul>
    </div>
  );
};

export default Navbar;
