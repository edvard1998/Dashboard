import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './silces/calendarSlice';

const store = configureStore({
  reducer: {
    calendar: calendarReducer
  }
});
  
export default store;