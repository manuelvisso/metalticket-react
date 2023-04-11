import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../Navbar/Navbar.scss";
import * as cartActions from "../../../redux/cart/cart-actions";

const Navbar = () => {
  //REVISAR LA OPTIMIZACIÓN DE ESTE CÓDIGO

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const isCartHidden = useSelector((state) => state.cart.hidden);

  //REVISAR LA OPTIMIZACIÓN DE ESTE CÓDIGO

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
        <li onClick={() => dispatch(cartActions.toggleHiddenCart())}>
          <FaShoppingCart size="20px" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
