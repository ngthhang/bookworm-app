import axios from './base.service';

export const getAllCategories = async () => {
  try {
    const res = await axios.get('/categories');
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
  } catch (e) {
    console.log('Error: ' + e.message);
  }
};
