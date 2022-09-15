import { combineReducers } from "@reduxjs/toolkit";

import products from '../features/products/productSlice';

const rootReducers = combineReducers({
    products
})

export default rootReducers;