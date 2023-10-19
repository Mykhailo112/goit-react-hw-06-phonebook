import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const getFilter = state => state.filter.value;
