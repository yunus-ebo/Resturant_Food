import { useState } from "react";
import { carouselImages } from "../../data/tempImgs";
import { Link } from "react-router-dom";
const SwiperCarousel = () => {
  const swiperImages = carouselImages.filter(
    (swipCaro) => swipCaro.isSwiper === true,
  );
  const [swipSlide, setSwipSlide] = useState(0);

  const handleNextSwip = () => {
    setSwipSlide((prev) => (prev === swiperImages.length - 1 ? 0 : prev + 1));
  };
  const handlePrevSwip = () => {
    setSwipSlide((prev) => (prev === 0 ? swiperImages.length - 1 : prev - 1));
  };
  return (
    <div className="swiperCarousel">
      <div
        className="swiperslider"
        style={{
          transform: `translateX(+${swipSlide * 100}%)`,
        }}
      >
        {swiperImages.map((swip) => (
          <Link className="swiperSlide" to={`/singleProduct/${swip.id}`}>
            <div key={swip.id}>
              <img src={swip.caros} alt="" />
            </div>
          </Link>
        ))}
      </div>
      <div className="dots_icons">
        <div className="swiper-icons">
          <div onClick={handleNextSwip} className="right-swiper">
            <i class="bi bi-arrow-right-short"></i>
          </div>
          <div onClick={handlePrevSwip} className="left-swiper">
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
