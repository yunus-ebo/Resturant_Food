import "./carousel.css";
import SwiperCarousel from "./SwiperCarousel";



const ProductsCarousel = ({carouselImgs}) => {
  
  return (
    <div className="carouselContainer">
      <div className="carousel-titles">
        <h2> تصفح لترى المزيد من الاطباق المتنوعة التي نقدمها لكم </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Amet,placeat.
        </p>
        <SwiperCarousel carouselImgs={carouselImgs}/>
      </div>
    </div>
  );
};
export default ProductsCarousel;