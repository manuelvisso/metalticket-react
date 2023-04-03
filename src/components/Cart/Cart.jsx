import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMinusSquare, FiPlusSquare, FiTrash2 } from "react-icons/fi";
import Image from "../../assets/bg/hero__bg.jpg";

import "../Cart/Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <button className="cart__btn__close">
        <AiOutlineClose color="#ffbe5c" size="20px" />
      </button>
      <p className="cart__title">Carrito de compras</p>
      <div className="cart__render__container">
        <article className="cart__item">
          <button className="cart__delete__btn">
            <FiTrash2 color="#ffbe5c" size="20px" />
          </button>
          <div className="cart__item__img">
            <img src={Image} alt="" />
          </div>
          <div className="cart__item__data">
            <p className="cart__item__artist">Arch Enemy</p>
            <p className="cart__item__city">Buenos Aires</p>
            <p className="cart__item__date">21/11/2022</p>
            <div className="cart__qty__container">
              <button className="cart__qty__minus">
                <FiMinusSquare color="#ffbe5c" size="20px" />
              </button>
              <p className="cart__qty">0</p>
              <button className="cart__qty__plus">
                <FiPlusSquare color="#ffbe5c" size="20px" />
              </button>
            </div>
          </div>
          <div>
            <p className="cart__item__price">ARS 6000</p>
          </div>
        </article>
      </div>

      <div className="cart__pricing__container">
        <div className="cart__pricing__titles">
          <p>Subtotal:</p>
          <small>Service Charge:</small>
          <p>Total:</p>
        </div>
        <div className="cart__pricing__amount">
          <p className="cart__pricing__subtotal">ARS 0.00</p>
          <small className="cart__pricing__charge">ARS 0.00</small>
          <p className="cart__pricing__total">ARS 0.00</p>
        </div>
      </div>
      <div className="cart__button__container">
        <button type="submit">Realizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
