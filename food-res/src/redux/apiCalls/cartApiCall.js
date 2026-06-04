import { ordersCartAction } from "../slices/cartSlices";

export function addItemToOrders(newItem) {
  // return (dispatch, getState)
  return (sendAction, getStoreState) => {
    sendAction(ordersCartAction.addToCartOrders(newItem));
    const { ordersCart } = getStoreState();
    localStorage.setItem(
      "Orders_cart",
      JSON.stringify(ordersCart.orderCartItems),
    );
  };
}

export function removeItemFromCart(id) {
  return (sendAction, getStoreState) => {
    sendAction(ordersCartAction.removeItemFromOrders(id));
    const { ordersCart } = getStoreState();
    localStorage.setItem(
      "Orders_cart",
      JSON.stringify(ordersCart.orderCartItems),
    );
  };
}