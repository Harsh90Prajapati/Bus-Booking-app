import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/booking/bookingSlice';
import searchReducer from '../features/searchSlice'
export const store = configureStore({
  reducer: {
    bus: searchReducer,
    booking: bookingReducer,
  },
});