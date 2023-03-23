import React from "react";
import "../FilterResults/TicketCard.scss";

import logo from "../../assets/logo/logo.png";

const TicketCard = () => {
  return (
    <div className="ticketCard">
      <article className="ticketCard__card">
        <figure className="ticketCard__card__img">
          <img src={logo} alt="" />
        </figure>
        <figcaption className="ticketCard__card__info">
          <p className="ticketCard__card__title">Arch Enemy</p>
          <p className="ticketCard__card__city">Buenos Aires</p>
          <p className="ticketCard__card__date">21/11/2022</p>
          <p className="ticketCard__card__price">$ 6000</p>
        </figcaption>
        <button type="button" className="ticketCard__card__btn">
          Comprar Tickets
        </button>
      </article>
    </div>
  );
};

export default TicketCard;
