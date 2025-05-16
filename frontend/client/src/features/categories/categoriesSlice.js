// src/features/categories/categoriesSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../api/categoryAPI';
import { getSubCategoris } from '../../api/subcategoryApi';

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const categories = await getCategories();
    return categories;
  }
);

export const fetchSubCategories = createAsyncThunk(
  'subcategories/fetch',
  async () => {
    const subcategories = await getSubCategoris();
    return subcategories;
  }
);

const initialState = {
  categories: [],
  subcategories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.subcategories = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
