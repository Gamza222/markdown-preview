import { configureStore } from '@reduxjs/toolkit';
import toolReducer from '../assets/toolSlice.js';
import editorReducer from '../assets/editorSlice.js';

export const store = configureStore({
  reducer: {
    maximising: toolReducer,
    editor: editorReducer
  },
});
