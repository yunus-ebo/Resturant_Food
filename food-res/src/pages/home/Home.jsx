import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";
import Category from "../../components/categories/Category";
import Recipe from "../../components/recipes/Recipe";
import MultipleDishes from "../../components/multipleDishes/MultipleDishes";
import {useSelector} from 'react-redux'
// import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import Candies from "../../components/candies/Candies";
import Offers from "../../components/offers/Offers";
import QrC from "../../components/qrCode/QrC";


const Home = () => {
  const {productItems} = useSelector(state => state.product)
  const productImages = productItems.filter(
    (product) => product.category === "product",
  );


  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <Banner productImages={productImages}/>
      <div className="homeContainer">
        <QrC />
        <ProductsCarousel />
        <MultipleDishes />
        <Category />
        <Candies />
        <Offers />
        {/* <Recipe /> */}
      </div>
    </>
  );
};
export default Home;