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
  let num = Math.round(parseFloat(number) * 100) / 100;
  return num.toLocaleString('en');
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

export const getQueryStringForReview = (props) => {
  let result = [];
  const { sortType, filter, currentPage, showInPage } = props;
  sortType !== null ? result.push(`sort=${sortType}`) : null;
  filter !== null ? result.push(`filter=${filter}`) : null;
  currentPage !== null ? result.push(`page=${currentPage}`) : null;
  showInPage !== null ? result.push(`per_page=${showInPage}`) : null;
  return result.join('&');
};

export const formatDate = (date) => {
  const dateObj = new Date(date);
  const time = dateObj.toLocaleTimeString();

  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let dt = dateObj.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return time + ' ' + dt + '-' + month + '-' + year;
};
