import "./banner.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { imageUrI } from "../../imageUrI";
const BannerPage = () => {
  const { productItems } = useSelector((state) => state.product);

  const singleBanner = productItems.find(
    (single) => single.category === "singleBanner",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bannerSinglePage">
      <div className="singleBanner-img">
        <img src={imageUrI(singleBanner?.image)} alt="" />
        <span>hello world</span>
      </div>
    </div>
  );
};

export default BannerPage;
