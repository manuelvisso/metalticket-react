import React from "react";
import TicketCard from "./TicketCard";

import "../FilterResults/FilterResults.scss";

const FilterResults = ({ filteredData }) => {
  console.log("filter==> ", filteredData);

  return (
    <div className="filter__results">
      <h2 className="filter__results__title">Eventos</h2>
      <div className="filter__results__cards">
        {filteredData.map((concert) => (
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
