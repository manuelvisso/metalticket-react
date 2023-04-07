export const SELECT_GENRE = "SELECT_GENRE";
export const SELECT_CITY = "SELECT_CITY";
export const SELECT_PLACE = "SELECT_PLACE";

export const selectedGenre = (genre) => {
  type: SELECT_GENRE;
  payload: genre;
};

export const selectedCity = (city) => {
  type: SELECT_CITY;
  payload: city;
};

export const selectedPlace = (place) => {
  type: SELECT_PLACE;
  payload: place;
};
