import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../Navbar/Navbar.scss";
import * as cartActions from "../../../redux/cart/cart-actions";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  //REVISAR LA OPTIMIZACIÓN DE ESTE CÓDIGO

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const isCartHidden = useSelector((state) => state.cart.hidden);

  //REVISAR LA OPTIMIZACIÓN DE ESTE CÓDIGO

  return (
    <div className="navbar">
      {!isCartHidden && <div className="overlay overlay__show"></div>}
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/eventos">Eventos</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <Cart />
        <li onClick={() => dispatch(cartActions.toggleHiddenCart())}>
          <FaShoppingCart size="20px" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
