import "./offerPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/apiCalls/productApiCall";
import { imageUrI } from "../../imageUrI";

const OfferPage = () => {
  const { id } = useParams();
  const { productItem } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductById(id));
  }, []);
  return (
    <div className="offerPageContainer">
      <div className="offerPage-img">
        <img src={imageUrI(productItem?.image)} alt="" />
      </div>
      <div className="offerPage-texts">
        <h2>{productItem?.description} :</h2>
        <ul className="offerPage-ul">
          {productItem?.descriptions.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div className="offerPage-cart">
        <span> أضف لسلة طلباتك </span>
        <i class="fa-solid fa-cart-plus cart_plus"></i>
      </div>
    </div>
  );
};

export default OfferPage;
