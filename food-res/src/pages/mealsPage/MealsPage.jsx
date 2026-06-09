import "./mealsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { imageUrI } from "../../imageUrI";
import {fetchProducts} from "../../redux/apiCalls/productApiCall"
const MealsPage = () => {
  const { productItems } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const mainDishes = productItems.filter(
    (main) => main.category === "special_plates",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts());
  }, []);
  return (
      <div className="mealsContainer">
        {mainDishes.map((dish) => {
          const { title, image } = dish;
          return (
            <div>
              <div className="dishes-img">
                <img src={imageUrI(image)} alt="" />
              </div>
              <div>
                <span>{title}</span>
              </div>
            </div>
          );
        })}
        <div className="meals-item">hello different meals</div>
      </div>
  );
};
export default MealsPage;
