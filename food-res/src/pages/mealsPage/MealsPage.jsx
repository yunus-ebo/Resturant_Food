import "./mealsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { imageUrI } from "../../imageUrI";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import { useParams, Link } from "react-router-dom";
import { CartPlus } from "@boxicons/react";
const MealsPage = () => {
  const { productItems } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const { mealsPage } = useParams();

  const currentDish = productItems.find((item) => item.slug === mealsPage);
  const mainDishes = currentDish?.images;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="mealsContainer">
      <div className="dishes_datas">
        {mainDishes?.map((dish) => (
          <div className="dish_data">
            <div className="dish-img">
              <img src={imageUrI(dish.image)} alt="" />
            </div>
            <p>{dish.item}</p>
            <div >
              <CartPlus />
            </div>
          </div>
        ))}
      </div>
      <div className="meals-item">hello different meals</div>
    </div>
  );
};
export default MealsPage;

/*
INFO:
--don't write: const mainDishes = currentDish?.images.filter((main) => main.category === "icon")
but write: const mainDishes = currentDish?.images
because: we did filter for category in [multipleDishes]

!to be more clearly: we did filter in [multipleDishes] section and thewn we want to take only [property of images],
and then do map on it  

*/
