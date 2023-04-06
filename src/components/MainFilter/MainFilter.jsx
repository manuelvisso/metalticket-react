import React, { useState } from "react";
import SelectionList from "./SelectionList";
import FilterResults from "./FilterResults/FilterResults";
import { genreList, cityList, placeList } from "../../utils";
import { applyFilterToData } from "../../utils";
import { concertsData } from "../../data";
import { useSelector } from "react-redux";

import "../MainFilter/MainFilter.scss";

const MainFilter = () => {
  const [filterValueGenre, setFilterValueGenre] = useState("");
  const [filterValueCity, setFilterValueCity] = useState("");
  const [filterValuePlace, setFilterValuePlace] = useState("");
  const [key, setKey] = useState(0);

  const concerts = useSelector((state) => state.concerts.concerts);

  const filteredData = applyFilterToData(
    concerts,
    filterValueGenre,
    filterValueCity,
    filterValuePlace
  );

  const resetFilteredData = () => {
    setFilterValueGenre("");
    setFilterValueCity("");
    setFilterValuePlace("");
    setKey(key + 3);
  };

  console.log("filteredData ==>", filteredData);

  console.log(filterValueGenre);

  return (
    <div className="filter">
      <div className="filter__selection">
        <SelectionList
          label="Géneros"
          name="genero"
          id="genero"
          optionList={genreList}
          defaultValue={genreList[0]}
          onChange={(e) => setFilterValueGenre(e.value)}
          value={filterValueGenre}
          key={key + 1}
        />
        <SelectionList
          label="Ciudad"
          name="ciudad"
          id="ciudad"
          optionList={cityList}
          defaultValue={cityList[0]}
          onChange={(e) => setFilterValueCity(e.value)}
          value={filterValueCity}
          key={key + 2}
        />
        <SelectionList
          label="Recinto"
          name="recinto"
          id="recinto"
          optionList={placeList}
          defaultValue={placeList[0]}
          onChange={(e) => setFilterValuePlace(e.value)}
          value={filterValuePlace}
          key={key + 3}
        />

        <div className="filter__cleaner">
          <button
            className="filter__cleaner__btn"
            type="reset"
            onClick={resetFilteredData}
          >
            <p className="filter__cleaner__text">Ver todos</p>
          </button>
        </div>
      </div>
      <FilterResults filteredData={filteredData} />
    </div>
  );
};

export default MainFilter;
