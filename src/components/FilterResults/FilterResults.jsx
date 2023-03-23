import React from "react";
import TicketCard from "./TicketCard";
import "../FilterResults/FilterResults.scss";

//eliminar después de la prueba

const FilterResults = () => {
  return (
    <div className="filter__results">
      <h2 className="filter__results__title">Eventos</h2>
      <div className="filter__results__cards">
        <TicketCard />
      </div>
    </div>
  );
};

export default FilterResults;
