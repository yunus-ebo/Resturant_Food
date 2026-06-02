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
        (item) => item.id == newItem.id,
      );
      if (checkForItem) {
        state.orderCartItems = state.orderCartItems.map((item) =>
          item.id == newItem.id ? newItem : item,
        );
      } else {
        state.orderCartItems = [...state.orderCartItems, newItem];
      }
    },
    removeItemFromOrders(state, action) {
      state.orderCartItems = state.orderCartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

const ordersCartAction = orderCartSlices.actions;
const ordersCartReducer = orderCartSlices.reducer;
export { ordersCartAction, ordersCartReducer };