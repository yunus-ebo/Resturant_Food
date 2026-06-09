import "./mealsPage.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { imageUrI } from "../../imageUrI";
// import {fetchProductById} from "../../redux/apiCalls/productApiCall"
const MealsPage = () => {
  const { productItems } = useSelector((state) => state.product);

  const mainDishes = productItems.filter(
    (main) => main.category === "special_plates",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
    </>
  );
};
export default MealsPage;
