export const calcTotalPrice = (items) =>
  items.reduce((acc, film) => (acc += film.price), 0);
