import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";
import Category from "../../components/categories/Category";
import {carouselImages} from '../../data/tempImgs'
import Recipe from "../../components/recipes/Recipe";
import MultipleDishes from "../../components/multipleDishes/MultipleDishes";
import {useDispatch,useSelector} from 'react-redux'
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const pizza = carouselImages.filter((piz) => piz.isPizza === true)
const iconsCarousel = carouselImages.filter((icon) => icon.isIcons === true)

const Home = () => {
  const dispatch = useDispatch();
  const {productItem} = useSelector(state => state.product)
  const productImages = productItem.filter(
    (product) => product.isProduct === true,
  );

  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <Banner productImages={productImages}/>
      <div className="homeContainer">
        <ProductsCarousel />
        <MultipleDishes iconsCarousel={iconsCarousel}/>
        <Category pizza={pizza}/>
        {/* <Recipe /> */}
      </div>
    </>
  );
};
export default Home;