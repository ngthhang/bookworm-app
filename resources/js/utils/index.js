export const getImage = (bookName) => {
  if (
    bookName !== null &&
    bookName !== undefined &&
    Number(bookName.replace('book', '')) <= 10
  ) {
    return require(`../../assets/bookcover/${bookName}.jpg`).default;
  }
  return 'error';
};

export const formatNum = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getTotalPriceItems = (bookPrice, discountPrice, quantity) => {
  return discountPrice
    ? Math.round(discountPrice * quantity * 1000) / 1000
    : Math.round(bookPrice * quantity * 1000) / 1000;
};
