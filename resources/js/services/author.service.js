import axios from './base.service';

export const getAllAuthors = async () => {
  try {
    const res = await axios.get('/authors');
    const { data, status } = res;
    if (status === 200) {
      return data;
    }
  } catch (e) {
    console.log('Error: ' + e.message);
  }
};
