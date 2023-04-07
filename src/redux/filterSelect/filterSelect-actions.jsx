export const SELECT_GENRE = "SELECT_GENRE";
export const SELECT_CITY = "SELECT_CITY";
export const SELECT_PLACE = "SELECT_PLACE";
export const RESET_FILTER = "RESET_FILTER";

export const selectedGenre = (genre) => {
  return {
    type: SELECT_GENRE,
    payload: genre,
  };
};

export const selectedCity = (city) => {
  return {
    type: SELECT_CITY,
    payload: city,
  };
};

export const selectedPlace = (place) => {
  return {
    type: SELECT_PLACE,
    payload: place,
  };
};

export const resetFilter = (genre, city, place) => {
  return {
    type: RESET_FILTER,
    payload: genre,
    city,
    place,
  };
};
