import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formData',
  initialState: {
    selectedTaskId: '',
  },
  reducers: {
    setSelectedTaskId: (state, action) => {
      state.selectedTaskId = action.payload;
    },
  },
});

export const { setSelectedTaskId } = formSlice.actions;
export default formSlice.reducer;
