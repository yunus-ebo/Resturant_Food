import "./categoryPage.css";
import { fetchProductById } from "../../redux/apiCalls/productApiCall";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { imageUrI } from "../../imageUrI";
const CategoryPages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productItem } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductById(id));
  }, [id]);
  return (
    <div className="categoryPageContainer">
      <div className="categoryPage-img">
        <img src={imageUrI(productItem?.image)} alt="" />
      </div>
      <div className="categoryPage-texts">
        <h2> المكونات </h2>
        <ul className="categoryPage-ul">
          {productItem?.descriptions.map((product) => (
            <li>
              {" "}
              <span className="dash">-</span> {product}
            </li>
          ))}
        </ul>
      </div>
      <div className="categoryPage-cart">
        <span> أضف لسلة طلباتك </span>
        <i class="fa-solid fa-cart-plus cart_plus"></i>
      </div>
    </div>
  );
};

export default CategoryPages;
