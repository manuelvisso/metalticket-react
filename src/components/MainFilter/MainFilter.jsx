import React from "react";
import SelectionList from "./SelectionList";

import { genreList, cityList, placeList } from "../../utils";

import "../MainFilter/MainFilter.scss";

const MainFilter = () => {
  const handleSelectChange = (e) => {
    return console.log(e.value);
  };

  return (
    <div className="filter">
      <div className="filter__selection">
        <SelectionList
          label="Géneros"
          name="genero"
          id="genero"
          optionList={genreList}
          defaultValue={genreList[0]}
          onChange={handleSelectChange}
        />
        <SelectionList
          label="Ciudad"
          name="ciudad"
          id="ciudad"
          optionList={cityList}
          defaultValue={cityList[0]}
          onChange={handleSelectChange}
        />
        <SelectionList
          label="Recinto"
          name="recinto"
          id="recinto"
          optionList={placeList}
          defaultValue={placeList[0]}
          onChange={handleSelectChange}
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
