import { productAction } from "../slices/productSlices";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5001/products");
      const data = await response.json();
      dispatch(productAction.setProduct(data));
    } catch (error) {
      console.log(error);
    }
  }
}
/*
we imported { productAction } for having setProduct
then push data inside
*/ 