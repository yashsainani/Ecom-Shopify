import { configureStore } from "@reduxjs/toolkit";

import productsSlice from './Slices/Products';

const store = configureStore({
    reducer: {
        products: productsSlice
    }
});

export default store;