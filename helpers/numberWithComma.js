export const numberWithComma = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
