import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const SwiperCarousel = () => {
  const { productItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();


  const swiperImages = productItems.filter(
    (swipCaro) => swipCaro.category === "swiper",
  );
  const [swipSlide, setSwipSlide] = useState(0);

  const handleNextSwip = () => {
    setSwipSlide((prev) => (prev === swiperImages.length - 1 ? 0 : prev + 1));
  };
  const handlePrevSwip = () => {
    setSwipSlide((prev) => (prev === 0 ? swiperImages.length - 1 : prev - 1));
  };

// useEffect(() => {
//   dispatch(fetchProducts());
// },[])

  return (
    <div className="swiperCarousel">
      <div
        className="swiperslider"
        style={{
          transform: `translateX(+${swipSlide * 100}%)`,
        }}
      >
        {swiperImages.map((swip) => (
          <Link className="swiperSlide" to={`/singleProduct/${swip._id}`}>
            <div key={swip._id}>
              <img
                src={`https://backend-resturant-food-1.onrender.com${swip.image}`}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="dots_icons">
        <div className="swiper-icons">
          <div onClick={handlePrevSwip} className="right-swiper">
            <i class="bi bi-arrow-right-short"></i>
          </div>
          <div onClick={handleNextSwip} className="left-swiper">
            <i class="bi bi-arrow-left-short"></i>
          </div>
        </div>
        <div className="dots">
          {swiperImages.map((_, index) => (
            <span
              className={swiperImages === index ? "dot active" : "dot"}
              key={index}
              onClick={() => setSwipSlide(index)} // becareful to not add (handleNextSwip) because you want to go the img you selected not move one by one
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SwiperCarousel;
