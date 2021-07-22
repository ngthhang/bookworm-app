import axios from './base.service';

export const getBooksOnSale = async () => {
  try {
    const res = await axios.get('/books?sort_type=SORT_BY_HOME_SALES&limit=10');
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
  } catch (e) {
    console.log('Error: ' + e.message);
  }
};

export const getPopularBooks = async () => {
  try {
    const res = await axios.get('/books?sort_type=SORT_BY_POPULAR&limit=8');
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
  } catch (e) {
    console.log('Error: ' + e.message);
  }
};

export const getRecommendedBooks = async () => {
  try {
    const res = await axios.get('/books?sort_type=SORT_BY_RECOMMENDED&limit=8');
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
  } catch (e) {
    console.log('Error: ' + e.message);
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axios.get(`/books/${id}`);
    return res;
  } catch (e) {
    console.log('Error: ' + e.message);
    return { status: 404 };
  }
};

export const getBookByIdAndQueryStr = async (id, query) => {
  try {
    const res = await axios.get(`/books/${id}?${query}`);
    return res;
  } catch (e) {
    console.log('Error: ' + e.message);
    return { status: 404 };
  }
};

export const getBooksByFilter = async (queryStr) => {
  try {
    const res = await axios.get(`/books?${queryStr}`);
    return res;
  } catch (e) {
    console.log('Error: ' + e.message);
    return { status: 404 };
  }
};
