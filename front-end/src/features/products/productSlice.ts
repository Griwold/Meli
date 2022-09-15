import { createAsyncThunk, createSlice, createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import axios from 'axios';

import api from '../../constants/api';
import sign from '../../constants/sign';
import { Products, Item } from '../../types/products';

interface ProductsState extends EntityState<Item> {
	status: 'idle' | 'loading' | 'failed' | 'success';
	categories: string[];
}

export const fetchProducts = createAsyncThunk<
	Products,
	{ product: string }
>('products/fetchProducts', async ({ product }) => {

	const url = `${api.url}items?q=${product.toLowerCase()}`;
	const response = await axios(url);

	if (response.data.author.name === sign.name && response.data.author.lastname === sign.lastname) {
		return response.data
	}
	throw new Error("The signatures do not match");	

})

const productAdapter = createEntityAdapter<Item>({
    selectId: (product) => product.id,
});

const initialState: ProductsState = productAdapter.getInitialState({
	status: 'idle',
	categories: []
});

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				productAdapter.setAll(state, action.payload.items)
				state.categories = action.payload.categories
				state.status = 'success'
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.status = 'failed'
			});
	},
});

export default productsSlice.reducer;
