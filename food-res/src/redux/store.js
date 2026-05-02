import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../redux/slices/productSlices";
 const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
export default store
/*
we imported { productreducer } for having productItem:[]
*/