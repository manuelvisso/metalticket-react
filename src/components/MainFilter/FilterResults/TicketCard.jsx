import React from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../../redux/cart/cart-actions";

import "../FilterResults/TicketCard.scss";

const TicketCard = ({ img, artist, city, date, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="ticketCard">
      <article className="ticketCard__card">
        <figure className="ticketCard__card__img">
          <img src={img} alt={artist} />
        </figure>
        <figcaption className="ticketCard__card__info">
          <p className="ticketCard__card__title">{artist}</p>
          <p className="ticketCard__card__city">{city}</p>
          <p className="ticketCard__card__date">{date}</p>
          <p className="ticketCard__card__price">${price}</p>
        </figcaption>
        <button
          type="button"
          className="ticketCard__card__btn"
          onClick={() => {
            dispatch(
              cartActions.addCartItem({ img, artist, city, date, price, id })
            );
            alert("Se ha agregado un ticket al carrito");
          }}
        >
          Comprar Tickets
        </button>
      </article>
    </div>
  );
};

export default TicketCard;
