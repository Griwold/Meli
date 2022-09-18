import { createAsyncThunk, createSlice, createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import axios from 'axios';

import api from '../../constants/api';
import sign from '../../constants/sign';
import { Products, Item } from '../../types/products';
import { ProductDetail, Item as ItemDetail } from '../../types/productDetail';

interface ProductsState extends EntityState<Item> {
	status: 'idle' | 'loading' | 'failed' | 'success';
	categories: string[];
	status_detail: 'idle' | 'loading' | 'failed' | 'success';
	product_detail: ItemDetail | null;
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

export const fetchProductDetail = createAsyncThunk<
	ProductDetail,
	{ identifier: string }
>('products/fetchProductDetail', async ({ identifier }) => {

	const url = `${api.url}items/${identifier}`;
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
	categories: [],
	status_detail: 'idle',
	product_detail: null
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
			})
			.addCase(fetchProductDetail.pending, (state) => {
				state.status_detail = 'loading'
			})
			.addCase(fetchProductDetail.fulfilled, (state, action) => {
				state.product_detail = action.payload.item
				state.status_detail = 'success'
			})
			.addCase(fetchProductDetail.rejected, (state) => {
				state.status_detail = 'failed'
			});
	},
});

export default productsSlice.reducer;
