import React, { useState } from "react";
import SelectionList from "./SelectionList";
import { genreList, cityList, placeList } from "../../utils";
import { applyFilters } from "../../utils";
import { concerts } from "../../data";

import "../MainFilter/MainFilter.scss";
import FilterResults from "../FilterResults/FilterResults";

const MainFilter = () => {
  const [filterValueGenre, setFilterValueGenre] = useState("");
  const [filterValueCity, setFilterValueCity] = useState("");
  const [filterValuePlace, setFilterValuePlace] = useState("");

  const events = concerts;

  // const filteredEvents = events.filter(
  //   (event) =>
  //     event.genre.includes(filterValueGenre) &&
  //     event.city.includes(filterValueCity) &&
  //     event.place.includes(filterValuePlace)
  // );

  const applyFilter = applyFilters(
    events,
    filterValueGenre,
    filterValueCity,
    filterValuePlace
  );

  const handleFilterChangeGenre = (e) => {
    setFilterValueGenre(e.value);
    console.log(e.value);
  };
  const handleFilterChangeCity = (e) => {
    setFilterValueCity(e.value);
    console.log(e.value);
  };
  const handleFilterChangePlace = (e) => {
    setFilterValuePlace(e.value);
    console.log(e.value);
  };

  console.log(
    "map ==>",
    applyFilter.map((obj) => obj.artist)
  );
  console.log("array", applyFilter);

  return (
    <div className="filter">
      <div className="filter__selection">
        <SelectionList
          label="Géneros"
          name="genero"
          id="genero"
          optionList={genreList}
          defaultValue={genreList[0]}
          onChange={handleFilterChangeGenre}
          value={filterValueGenre}
        />
        <SelectionList
          label="Ciudad"
          name="ciudad"
          id="ciudad"
          optionList={cityList}
          defaultValue={cityList[0]}
          onChange={handleFilterChangeCity}
          value={filterValueCity}
        />
        <SelectionList
          label="Recinto"
          name="recinto"
          id="recinto"
          optionList={placeList}
          defaultValue={placeList[0]}
          onChange={handleFilterChangePlace}
          value={filterValuePlace}
        />

        <div className="filter__cleaner">
          <button className="filter__cleaner__btn" type="reset">
            <p className="filter__cleaner__text">Ver todos</p>
          </button>
        </div>
      </div>
      <FilterResults array={applyFilter} />
    </div>
  );
};

export default MainFilter;
