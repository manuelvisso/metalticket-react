import React from "react";
import FilterResults from "../FilterResults/FilterResults";
import "../MainFilter/MainFilter.scss";

const MainFilter = () => {
  return (
    <div className="filter">
      {/* <div className="filter-icon-container">
        <p>Filtrar búsqueda</p>
        <img className="filter-icon" src="/assets/icons/filter.png" alt="" />
      </div> */}
      <div className="filter__selection">
        <div className="filter__selection__g filter__selection__A">
          <p className="filter__selection__title">Géneros</p>
          <select name="Género" id="genero" className="filter__selection__list">
            {/* <option value="" selected>
              Todos
            </option>
            <option value="Alternativo">Alternativo</option>
            <option value="Black Metal">Black Metal</option>
            <option value="Death Metal">Death Metal</option>
            <option value="Folk Metal">Folk Metal</option>
            <option value="Grindcore">Grindcore</option>
            <option value="Heavy Metal">Heavy Metal</option>
            <option value="Industrial">Industrial</option>
            <option value="Nu Metal">Nu Metal</option>
            <option value="Power Metal">Power Metal</option>
            <option value="Symphonic Metal">Symphonic Metal</option>
            <option value="Thrash Metal">Thrash Metal</option>
            <option value="Otros">Otros</option> */}
          </select>
        </div>
        <div className="filter__selection__g filter__selection__B">
          <p className="filter__selection__title">Ciudad</p>
          <select name="Ciudad" id="ciudad" className="filter__selection__list">
            {/* <option value="" selected>
              Todos
            </option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Rosario">Rosario</option> */}
          </select>
        </div>
        <div className="filter__selection__g filter__selection__C">
          <p className="filter__selection__title">Recinto</p>
          <select
            name="Recinto"
            id="recinto"
            className="filter__selection__list"
          >
            {/* <option value="" selected>
              Todos
            </option>
            <option value="CC de Rosario">CC de Rosario</option>
            <option value="Fernet Club">Fernet Club</option>
            <option value="Luna Park">Luna Park</option>
            <option value="River Plate">River Plate</option>
            <option value="Uniclub">Uniclub</option>
            <option value="Teatro Flores">Teatro Flores</option> */}
          </select>
        </div>
        <div className="filter__cleaner">
          <button className="filter__cleaner__btn" type="reset">
            <p className="filter__cleaner__text">Ver todos</p>
          </button>
        </div>
      </div>
      <FilterResults />
    </div>
  );
};

export default MainFilter;
