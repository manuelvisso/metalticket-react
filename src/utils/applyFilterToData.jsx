function applyFilterToData(
  concerts,
  filterValueGenre,
  filterValueCity,
  filterValuePlace
) {
  const filteredData = concerts.filter(
    (concert) =>
      concert.genre.includes(filterValueGenre) &&
      concert.city.includes(filterValueCity) &&
      concert.place.includes(filterValuePlace)
  );

  return filteredData;
}

export { applyFilterToData };
