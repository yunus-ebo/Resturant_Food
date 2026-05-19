import "./banner.css";
import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'
import {imageUrI} from '../../imageUrI'

const Banner = ({ productImages }) => {
  const [moveImg, setMoveImg] = useState(0);

  const clickRightHandler = () => {
    setMoveImg((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };
  const clickLeftHandler = () => {
    setMoveImg((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };
  useEffect(() => {
    const interval = setInterval(clickRightHandler, 5000);
    return () => clearInterval(interval);
  }, [moveImg]);

  return (
    <div className="bannerContainer">
      <div
        style={{
          transform: `translateX(+${moveImg * 100}%)`,
        }}
        className="bannerImages"
      >
        {productImages.map((caro) => (
            <Link to={`/bannerPage/${caro._id}`} className="banner-Img">
              <img src={imageUrI(caro.image)} alt="" />
            </Link>
        ))}
      </div>
      <div className="banner-icons">
        <div onClick={clickLeftHandler} className="right-arrow">
          <i class="bi bi-arrow-right-short"></i>
        </div>
        <div onClick={clickRightHandler} className="left-arrow">
          <i class="bi bi-arrow-left-short"></i>
        </div>
      </div>
    </div>
  );
};
export default Banner;