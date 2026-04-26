import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";
import Category from "../../components/category/Category";
import {carouselImages} from '../../data/tempImgs'
import Recipe from "../../components/recipes/Recipe";

const pizza = carouselImages.filter((piz) => piz.isPizza === true)

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner />
      <div className="homeContainer">
        <ProductsCarousel />
        <Category pizza={pizza}/>
        <Recipe /> 
      </div>
    </>
  );
};

export default Home;
