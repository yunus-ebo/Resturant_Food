import { createSlice } from "@reduxjs/toolkit";

const orderCartSlices = createSlice({
  name: "Order_Cart",
  initialState: {
    orderCartItems: localStorage.getItem("Orders_cart") ? JSON.parse(localStorage.getItem("Orders_cart")) : [],
  },
  reducers: {
    addToCartOrders(state, action) {
      const newItem = action.payload;
      const checkForItem = state.orderCartItems.find(
        (item) => item._id === newItem._id, // we have to write id as well as it is written in mongodb means: _id 
      );
      if (checkForItem) {
        state.orderCartItems = state.orderCartItems.map((item) =>
          item._id === newItem._id ? newItem : item,
        );
      } else {
        state.orderCartItems = [...state.orderCartItems, newItem];
      }
    },
    removeItemFromOrders(state, action) {
      state.orderCartItems = state.orderCartItems.filter(
        (item) => item._id !== action.payload,
      );
    },
  },
});

const ordersCartAction = orderCartSlices.actions;
const ordersCartReducer = orderCartSlices.reducer;
export { ordersCartAction, ordersCartReducer };