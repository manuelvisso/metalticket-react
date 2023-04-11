import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "../Cart/Cart.scss";
import CartItem from "./CartItem";
import * as cartActions from "../../redux/cart/cart-actions";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const isCartHidden = useSelector((state) => state.cart.hidden);

  return (
    <div className={isCartHidden ? "cart cart__hidden" : "cart"}>
      <button
        className="cart__btn__close"
        onClick={() => dispatch(cartActions.toggleHiddenCart())}
      >
        <AiOutlineClose color="#ffbe5c" size="20px" />
      </button>
      <p className="cart__title">Carrito de compras</p>

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
