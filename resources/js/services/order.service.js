import axios from './base.service';

export const placeOrderBooks = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(`/orders`, data);
    return res;
  } catch (e) {
    console.log('Error: ' + e.message);
    return { status: 404 };
  }
};
