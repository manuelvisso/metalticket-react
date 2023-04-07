import { genreList, cityList, placeList } from "../../data";

import {
  SELECT_GENRE,
  SELECT_CITY,
  SELECT_PLACE,
  RESET_FILTER,
} from "./filterSelect-actions";

const INITIAL_STATE = {
  genreFilter: genreList,
  cityFilter: cityList,
  placeFilter: placeList,
  filterSelected: ["", "", ""],
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return {
        ...state,
        filterSelected: [
          action.payload,
          state.filterSelected[1],
          state.filterSelected[2],
        ],
      };
    case SELECT_CITY:
      return {
        ...state,
        filterSelected: [
          state.filterSelected[0],
          action.payload,
          state.filterSelected[2],
        ],
      };
    case SELECT_PLACE:
      return {
        ...state,
        filterSelected: [
          state.filterSelected[0],
          state.filterSelected[1],
          action.payload,
        ],
      };
    case RESET_FILTER:
      return {
        ...state,
        filterSelected: ["", "", ""],
      };
    default:
      return state;
  }
};
export default filterReducer;
