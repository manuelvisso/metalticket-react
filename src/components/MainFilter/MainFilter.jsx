import React, { useState } from "react";
import SelectionList from "./SelectionList";

import { genreList, cityList, placeList } from "../../utils";

import { concerts } from "../../data";

import "../MainFilter/MainFilter.scss";

const MainFilter = () => {
  const [filterValue, setFilterValue] = useState("");

  const data = concerts;

  const filteredData = data.filter((obj) =>
    filterValue ? obj.genre === filterValue : true
  );

  const handleFilterChange = (e) => {
    setFilterValue(e.value);
    console.log(e.value);
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

// import React, { useState } from "react";

// const MyComponent = () => {
//   const [filterValue, setFilterValue] = useState(""); // estado del valor seleccionado en el select
//   const data = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
//   ];

//   // función que maneja el cambio en el valor seleccionado del select
//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value); // establece el valor seleccionado en el estado
//   };

//   // función que filtra los objetos según el valor seleccionado en el select
//   const filteredData = data.filter((obj) =>
//     filterValue ? obj.name === filterValue : true
//   );

//   return (
//     <div>
//       <label htmlFor="filter-select">Filtrar por nombre:</label>
//       <select
//         id="filter-select"
//         value={filterValue}
//         onChange={handleFilterChange}
//       >
//         <option value="">Todos</option>
//         <option value="John">John</option>
//         <option value="Jane">Jane</option>
//         <option value="Bob">Bob</option>
//         <option value="Alice">Alice</option>
//       </select>

//       <ul>
//         {filteredData.map((obj) => (
//           <li key={obj.id}>{obj.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
