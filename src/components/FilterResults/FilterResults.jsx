import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getConcerts } from "../../api/concertsApi";
import "../FilterResults/FilterResults.scss";

const FilterResults = () => {
  const { data: concerts } = useQuery({
    queryKey: ["concerts"],
    queryFn: getConcerts,
  });

  return (
    <div className="filter__results">
      <h2 className="filter__results__title">Eventos</h2>
      <div className="filter__results__cards"></div>
    </div>
  );
};

export default FilterResults;
