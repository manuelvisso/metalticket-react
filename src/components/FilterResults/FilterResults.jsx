import React from "react";
import TicketCard from "./TicketCard";
import { concerts } from "../../data";
// import { applyFilters } from "../../utils";

import "../FilterResults/FilterResults.scss";

const FilterResults = ({ array }) => {
  console.log("filter==> ", array);

  return (
    <div className="filter__results">
      <h2 className="filter__results__title">Eventos</h2>
      <div className="filter__results__cards">
        {array.map((concert) => (
          <TicketCard
            key={concert.id}
            img={concert.img}
            artist={concert.artist}
            city={concert.city}
            date={concert.date}
            price={concert.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterResults;
