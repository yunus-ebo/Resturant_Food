import "./candyPage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageUrI } from "../../imageUrI";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../../redux/apiCalls/productApiCall";

const CandyPage = () => {
  const { productItem } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductById(id));
  }, [id]);
  return (
    <div className="candyPageContainer">
      <div className="candyPage-img">
        <img src={imageUrI(productItem?.image)} alt="" />
      </div>

      <div className="candyPage-texts">
        <h2> المكونات </h2>
        <ul className="candyPage-ul">
          {productItem?.descriptions.map((product) => (
            <li><span className="candy-dash">-</span>{product}</li>
          ))}
        </ul>
      </div>
      <div className="candyPage-cart">
        <span> أضف لسلة طلباتك </span>
        <i class="fa-solid fa-cart-plus cart_plus"></i>
      </div>
    </div>
  );
};

export default CandyPage;
