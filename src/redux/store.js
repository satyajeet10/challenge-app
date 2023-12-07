import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import formReducer from './slices/formSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    formData: formReducer,
  },
});

export default store;
