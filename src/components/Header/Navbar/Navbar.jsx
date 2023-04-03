import React from "react";
import { FaShoppingCart } from "react-icons/fa";
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
        <li>
          <FaShoppingCart size="20px" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
