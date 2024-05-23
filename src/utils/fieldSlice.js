import { createSlice } from '@reduxjs/toolkit';

const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    fieldDataOne : [
        { name: 'jerry1', status: false },
        { name: 'jerry2', status: false },
        { name: 'jerry3', status: false },
        { name: 'jerry4', status: false },
        { name: 'jerry5', status: false },
      ],
      fieldDataTwo : [
        { name: 'tom1', status: false },
        { name: 'tom2', status: false },
        { name: 'tom3', status: false },
        { name: 'tom4', status: false },
        { name: 'tom5', status: false },
      ],      
  },
  reducers: {
    updateFieldStatusOne: (state, action) => {
      const { fieldName, status } = action.payload;
      const field = state.fieldDataOne.find(item => item.name === fieldName);
      if (field) {
        field.status = status; 
      }
    },
    updateFieldStatusTwo: (state, action) => {
        const { fieldName, status } = action.payload;
        const field = state.fieldDataTwo.find(item => item.name === fieldName);
        if (field) {
          field.status = status; 
        }
      },
      resetFieldStatus: (state, action) => {
        const { selectedValue, selectedValueTwo } = action.payload;
        state.fieldDataOne.forEach(field => {
          if (field.name === selectedValue) {
            field.status = false;
          }
        });
        state.fieldDataTwo.forEach(field => {
          if (field.name === selectedValueTwo) {
            field.status = false;
          }
        });
      },
      
  },
});

export const { updateFieldStatusOne, updateFieldStatusTwo, resetFieldStatus } = fieldSlice.actions;

export default fieldSlice.reducer;
