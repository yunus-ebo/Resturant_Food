import "./multipleDish.css";
// import { carouselImages } from "../../data/tempImgs";
import { useState } from "react";
const MultipleDishes = ({iconsCarousel}) => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);

  const slide = 4; // make this number fits with number og images to gain all width you need
  const total = Math.ceil(iconsCarousel.length / slide);
 
  const goNext = () => {
    // setCurrent((prev) => (prev === iconsCarousel.length - 1 ? 0 : prev + 1));
    setCurrent((prev) => ((prev + 1) % total));
  };
  const goPrev = () => {
    // setCurrent((prev) => (prev === 0 ? iconsCarousel.length - 1 : prev - 1));
    setCurrent((prev) => ((prev - 1 + total) % total));
  };
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchend = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      goNext();
    } else if (endX - startX > 50) {
      goPrev();
    }
  };
  return (
    <div
      className="multipleImages"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchend}
    >
      <div
        className="multi-wrapper"
        style={{
          transform: `translateX(+${current * 100}%)`,
          transition: "transform .4s ease",
        }}
      >
        {iconsCarousel.map((mult, index) => (
          <div
           className="multiple-image" key={index}>
           <img src={mult.icon} alt="" />
           <p>sol</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MultipleDishes;