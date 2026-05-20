import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";
import Category from "../../components/categories/Category";
import {carouselImages} from '../../data/tempImgs'
import Recipe from "../../components/recipes/Recipe";
import MultipleDishes from "../../components/multipleDishes/MultipleDishes";
import {useDispatch,useSelector} from 'react-redux'
// import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import Candies from "../../components/candies/Candies";
import Offers from "../../components/offers/Offers";

const iconsCarousel = carouselImages.filter((icon) => icon.category === "icon")

const Home = () => {
  // const dispatch = useDispatch();
  const {productItems} = useSelector(state => state.product)
  const productImages = productItems.filter(
    (product) => product.category === "product",
  );
  const pizzaItems = productItems.filter(
    (product) => product.isPizza === true,
  );


  // useEffect(() => {
  //   dispatch(fetchProducts());
  //   window.scrollTo(0, 0);
  // },[]);
  return (
    <>
      <Banner productImages={productImages}/>
      <div className="homeContainer">
        <ProductsCarousel />
        <MultipleDishes iconsCarousel={iconsCarousel}/>
        <Category pizzaItems={pizzaItems}/>
        <Candies />
        <Offers />
        {/* <Recipe /> */}
      </div>
    </>
  );
};
export default Home;