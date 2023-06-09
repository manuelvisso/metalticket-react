import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "./Cart.scss";
import CartItem from "./CartItem";
import * as cartActions from "../../../redux/cart/cart-actions";
import EmptyCartMsg from "../../UI/messages/EmptyCartMsg";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const isCartHidden = useSelector((state) => state.cart.hidden);

  const subTotalAmount = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const serviceChargeAmount = subTotalAmount * 0.1;

  const totalAmount = subTotalAmount + serviceChargeAmount;

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }),
    [cartItems];

  useEffect(() => {
    if (!isCartHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartHidden]);

  return (
    <div className={isCartHidden ? "cart cart__hidden" : "cart"}>
      <button
        className="cart__btn__close"
        onClick={() => dispatch(cartActions.toggleHiddenCart())}
      >
        <AiOutlineClose color="#ffbe5c" size="20px" />
      </button>
      <p className="cart__title">Carrito de compras</p>
      {showMessage && <EmptyCartMsg />}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          artist={item.artist}
          date={item.date}
          price={item.price}
          qty={item.quantity}
        />
      ))}

      <div className="cart__pricing__container">
        <div className="cart__pricing__titles">
          <p>Subtotal:</p>
          <small>Service Charge:</small>
          <p>Total:</p>
        </div>
        <div className="cart__pricing__amount">
          <p className="cart__pricing__subtotal">ARS {subTotalAmount}</p>
          <small className="cart__pricing__charge">
            ARS {serviceChargeAmount}
          </small>
          <p className="cart__pricing__total">ARS {totalAmount}</p>
        </div>
      </div>
      <div className="cart__button__container">
        <button
          type="submit"
          disabled={cartItems.length === 0}
          onClick={() => {
            dispatch(cartActions.clearCartItems());
            alert("Su compra ha sido realizada");
          }}
        >
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
