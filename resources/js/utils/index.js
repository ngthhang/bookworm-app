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

export const getQueryString = (props) => {
  const { sortType, perPage, author, category, rating, currentPage } = props;
  let result = [];
  sortType !== null ? result.push(`sort_type=${sortType}`) : null;
  perPage !== null
    ? result.push(`per_page=${perPage}&page=${currentPage}`)
    : null;
  author !== null ? result.push(`author=${author.id}`) : null;
  category !== null ? result.push(`category=${category.id}`) : null;
  rating !== null ? result.push(`rating=${rating}`) : null;
  return result.join('&');
};
