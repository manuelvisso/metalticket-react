import { TotalConcertsData, concertsData } from "../../data";

const INITIAL_STATE = {
  concerts: concertsData,
  totalConcerts: TotalConcertsData,
};

const concertsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default concertsReducer;
