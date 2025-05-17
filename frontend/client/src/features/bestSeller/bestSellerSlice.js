import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBestSeller } from '../../api/bestSellerApi'

export const fetchBestSellerBooks = createAsyncThunk('/get-bestSeller/products', async ()=>{
    const response = await getBestSeller();
    return response
})

const initialState = {
  bestSeller : []
}

export const bestSellerSlice = createSlice({
  name: 'bestSeller',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBestSellerBooks.fulfilled, (state, action) => {
      state.bestSeller = action.payload;
    });
  },
});

export default bestSellerSlice.reducer