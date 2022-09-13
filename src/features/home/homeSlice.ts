import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const fetchProducts = createAsyncThunk<
any,
{ product: string }
>('home/fetProducts', async ({ product }) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${product}`;
    const response = await axios(url);

    console.log(response, "RESPONSE");
})

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   })
    //   .addCase(incrementAsync.rejected, (state) => {
    //     state.status = 'failed';
    //   });
  },
});

export default homeSlice.reducer;
