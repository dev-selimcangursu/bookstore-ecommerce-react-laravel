// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import homeMiniCategoriesReducer from '../features/categories/HomeMiniCategoriesSlice';
import bestSellerReducer from '../features/bestSeller/bestSellerSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    homeMiniCategories:homeMiniCategoriesReducer,
    bestSeller:bestSellerReducer
  },
});
