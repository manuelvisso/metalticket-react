import React from "react";
import { useSelector } from "react-redux";
import TicketCard from "./TicketCard";

import "../FilterResults/FilterResults.scss";

const FilterResults = () => {
  const filterSelected = useSelector((state) => state.filter.filterSelected);

  let concerts = useSelector((state) => state.concerts.concerts);

  if (filterSelected) {
    concerts = concerts.filter(
      (concert) =>
        concert.genre.includes(filterSelected[0]) &&
        concert.city.includes(filterSelected[1]) &&
        concert.place.includes(filterSelected[2])
    );
  }

  return (
    <div className="filter__results">
      <h2 className="filter__results__title">Eventos</h2>
      <div className="filter__results__cards">
        {concerts.map((concert) => (
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
