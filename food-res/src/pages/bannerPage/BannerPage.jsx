import "./banner.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imageUrI } from "../../imageUrI";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
const BannerPage = () => {
  const { productItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const singleBanner = productItems.find(
    (single) => single.category === "singleBanner",
  );

  useEffect(() => {
    dispatch(fetchProducts());
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
