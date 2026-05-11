import "./multipleDish.css";
// import { carouselImages } from "../../data/tempImgs";
import { useState } from "react";
import { Link } from "react-router-dom";
const MultipleDishes = ({ iconsCarousel }) => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);

  const slide = 4; // make this number fits with number og images to gain all width you need
  const total = Math.ceil(iconsCarousel.length / slide);

  const goNext = () => {
    // setCurrent((prev) => (prev === iconsCarousel.length - 1 ? 0 : prev + 1));
    setCurrent((prev) => (prev + 1) % total);
  };
  const goPrev = () => {
    // setCurrent((prev) => (prev === 0 ? iconsCarousel.length - 1 : prev - 1));
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchend = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      goPrev();
    } else if (endX - startX > 50) {
      goNext();
    }
  };
  return (
    <div
      className="multipleImages"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchend}
    >
      <div
        style={{
          transform: `translateX(+${current * 100}%)`,
          transition: "transform .4s ease",
        }}
      >
        <ul className="multi-wrapper">
          {iconsCarousel.map((mult) => (
            <li className="multiple-image" key={mult.id}>
              <Link className="multi-link" to={`/mealsPage/${mult.id}`}>
                <img src={mult.icon} alt="" />
                <p>{mult.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="multi-bottom">
        <p className="multi-bottom-text">اسحب </p>
        <div className="multi-bottom-icon">
          <i class="bi bi-arrow-left"></i>
        </div>
      </div>
    </div>
  );
};
export default MultipleDishes;
