function applyFilters(
  events,
  filterValueGenre,
  filterValueCity,
  filterValuePlace
) {
  const filteredEvents = events.filter(
    (event) =>
      event.genre.includes(filterValueGenre) &&
      event.city.includes(filterValueCity) &&
      event.place.includes(filterValuePlace)
  );

  return filteredEvents;
}

export { applyFilters };
