import axios from 'axios';

const API_BASE_URL = '/api';

export const bookSeats = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/book`, bookingData);
  return response.data;
};