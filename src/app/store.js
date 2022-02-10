import { configureStore } from '@reduxjs/toolkit';
import toolReducer from '../assets/toolSlice.js';
export const store = configureStore({
  reducer: {
    maximising: toolReducer
  },
});
