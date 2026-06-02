import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlices";
import {ordersCartReducer} from './slices/cartSlices'
 const store = configureStore({
  reducer: {
    product: productReducer,
    ordersCart:ordersCartReducer
  },
});
export default store
/*
we imported { productreducer } for having productItem:[]
*/