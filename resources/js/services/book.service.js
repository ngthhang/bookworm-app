import axios from './base.service';

export const getBooksOnSale = async () => {
  try {
    const res = await axios.get('/home/on-sale');
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
    const res = await axios.get('/home/popular');
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
    const res = await axios.get('/home/recommended');
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
    const res = await axios.get(`/product/${id}`);
    return res;
  } catch (e) {
    console.log('Error: ' + e.message);
    return { status: 404 };
  }
};
