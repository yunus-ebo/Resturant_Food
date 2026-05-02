import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productItem",
  initialState: {
    productItem: [], // useState([])
  },
  reducers: {
    setProduct(state, action) {
      state.productItem = action.payload;
    },
  },
});

const productAction = productSlice.actions;
const productReducer = productSlice.reducer;

export { productAction, productReducer };

/* rather than in main file:
*  const [product, setProduct] = useState([]);
*  async function fetchProducts() {
     try {
       const response = await fetch("http://localhost:5001/products");
       const data = await response.json();
       setProduct(data);
     } catch (error) {
       console.log(error);
     }
   }

   useEffect(() => {
     fetchProducts();
   }, []); 
 * 
 */
