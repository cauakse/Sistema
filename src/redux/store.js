import {configureStore} from "@reduxjs/toolkit";
import produtoReducer from '../redux/produtoReducer.js';

const store = configureStore({
    reducer:{
        'produto':produtoReducer
    }
});
export default store;