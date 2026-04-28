import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";
import Category from "../../components/category/Category";
import {carouselImages} from '../../data/tempImgs'
import Recipe from "../../components/recipes/Recipe";
import MultipleDishes from "../../components/multipleDishes/MultipleDishes";

const pizza = carouselImages.filter((piz) => piz.isPizza === true)
const iconsCarousel = carouselImages.filter((icon) => icon.isIcons === true)

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner />
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
