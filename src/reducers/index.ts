import { combineReducers } from "@reduxjs/toolkit";

import home from '../features/home/homeSlice';

const rootReducers = combineReducers({
    home
})

export default rootReducers;