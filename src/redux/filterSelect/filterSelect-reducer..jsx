import { genreList, cityList, placeList } from "../../data";

import {
  SELECT_GENRE,
  SELECT_CITY,
  SELECT_PLACE,
} from "./filterSelect-actions";

const INITAL_STATE = {
  filter: genreList,
  filterSelected: "Alternativo",
};

const filterReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return {
        ...state,
        filterSelected: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
