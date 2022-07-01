import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from './cart/slice';
import filmsSlice from './films/slice';

export const store = configureStore({
    reducer:{
        cart: cartSlice,
        film: filmsSlice,
    },
});