import React, { useState, useEffect } from "react";
import SelectionList from "./SelectionList";

import { genreList, cityList, placeList } from "../../utils";

import { concerts } from "../../data";

import "../MainFilter/MainFilter.scss";

const MainFilter = () => {
  const [filterValue, setFilterValue] = useState("");

  const [data, setData] = useState(concerts);

  const filteredData = data.filter((obj) =>
    filterValue ? obj.artist === filterValue : true
  );

  const handleFilterChange = (e) => {
    setFilterValue(e.value);
  };

  console.log(filteredData.map((obj) => obj.artist));

  return (
    <div className="filter">
      <div className="filter__selection">
        <SelectionList
          label="Géneros"
          name="genero"
          id="genero"
          optionList={genreList}
          defaultValue={genreList[0]}
          onChange={handleFilterChange}
          value={filterValue}
        />
        <SelectionList
          label="Ciudad"
          name="ciudad"
          id="ciudad"
          optionList={cityList}
          defaultValue={cityList[0]}
          onChange={""}
        />
        <SelectionList
          label="Recinto"
          name="recinto"
          id="recinto"
          optionList={placeList}
          defaultValue={placeList[0]}
          onChange={""}
        />

        <div className="filter__cleaner">
          <button className="filter__cleaner__btn" type="reset">
            <p className="filter__cleaner__text">Ver todos</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainFilter;
