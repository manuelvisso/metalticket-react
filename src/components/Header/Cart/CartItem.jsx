import React from "react";
import { FiMinusSquare, FiPlusSquare, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/cart/cart-actions";

import "./Cart.scss";

const CartItem = ({ img, artist, city, date, price, qty, id }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = () =>
    dispatch(
      cartActions.addCartItem({
        img,
        artist,
        city,
        date,
        price,
        qty,
        id,
      })
    );

  const decreaseQuantity = () => {
    dispatch(
      cartActions.subtractCartItem({
        img,
        artist,
        city,
        date,
        price,
        qty,
        id,
      })
    );
  };

  return (
    <div className="cart__render__container">
      <article className="cart__item">
        <button
          className="cart__delete__btn"
          onClick={() => {
            if (confirm("¿Desea eliminar este item del carrito?"))
              dispatch(cartActions.removeCartItem(id));
          }}
        >
          <FiTrash2 color="#ffbe5c" size="20px" />
        </button>
        <div className="cart__item__img">
          <img src={img} alt={`Imagen de ${artist}`} />
        </div>
        <div className="cart__item__data">
          <p className="cart__item__artist">{artist}</p>
          <p className="cart__item__city">{city}</p>
          <p className="cart__item__date">{date}</p>
          <div className="cart__qty__container">
            <button className="cart__qty__minus" onClick={decreaseQuantity}>
              <FiMinusSquare color="#ffbe5c" size="20px" />
            </button>
            <p className="cart__qty">{qty}</p>
            <button className="cart__qty__plus" onClick={increaseQuantity}>
              <FiPlusSquare color="#ffbe5c" size="20px" />
            </button>
          </div>
        </div>
        <div>
          <p className="cart__item__price">ARS {price * qty}</p>
        </div>
      </article>
    </div>
  );
};

export default CartItem;
