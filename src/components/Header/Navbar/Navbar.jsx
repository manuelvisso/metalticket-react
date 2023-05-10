import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import * as cartActions from "../../../redux/cart/cart-actions";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  //REVISAR LA OPTIMIZACIÓN DE ESTE CÓDIGO
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isCartHidden = useSelector((state) => state.cart.hidden);
  //REVISAR LA OPTIMIZACIÓN DE ESTE CÓDIGO

  const toggleHiddenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="navbar">
      {!isCartHidden && <div className="overlay overlay__show"></div>}
      <div className="navbar__menuIcon" onClick={toggleHiddenMenu}>
        <FaBars />
      </div>
      <ul className={`navbar__menu ${menuIsOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleHiddenMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/eventos" onClick={toggleHiddenMenu}>
            Eventos
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleHiddenMenu}>
            Iniciar Sesión
          </Link>
        </li>
      </ul>
      <div
        className="navbar__cartIcon"
        onClick={() => dispatch(cartActions.toggleHiddenCart())}
      >
        <FaShoppingCart size="20px" />
      </div>
      <Cart />
    </div>
  );
};

export default Navbar;
