import React, { useState } from "react";
import SelectionList from "./SelectionList";
import FilterResults from "../FilterResults/FilterResults";
import { genreList, cityList, placeList } from "../../utils";
import { applyFilterToData } from "../../utils";
import { concertsData } from "../../data";

import "../MainFilter/MainFilter.scss";

const MainFilter = () => {
  const [filterValueGenre, setFilterValueGenre] = useState("");
  const [filterValueCity, setFilterValueCity] = useState("");
  const [filterValuePlace, setFilterValuePlace] = useState("");

  const concerts = concertsData;

  const filteredData = applyFilterToData(
    concerts,
    filterValueGenre,
    filterValueCity,
    filterValuePlace
  );

  const handleFilterChangeGenre = (e) => {
    setFilterValueGenre(e.value);
  };
  const handleFilterChangeCity = (e) => {
    setFilterValueCity(e.value);
  };
  const handleFilterChangePlace = (e) => {
    setFilterValuePlace(e.value);
  };

  console.log(
    "map ==>",
    filteredData.map((obj) => obj.artist)
  );

  console.log("array", filteredData);

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
      <FilterResults filteredData={filteredData} />
    </div>
  );
};

export default MainFilter;
