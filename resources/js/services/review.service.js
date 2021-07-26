import axios from './base.service';

export const submitReview = async (request) => {
  try {
    const res = await axios.post(`/reviews`, request);
    return res;
  } catch (e) {
    console.log('Error: ' + e.message);
  }
};
