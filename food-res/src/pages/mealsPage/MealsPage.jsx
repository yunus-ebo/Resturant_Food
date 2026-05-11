import "./mealsPage.css";
import { useParams } from "react-router-dom";
import { carouselImages } from "../../data/tempImgs";
const MealsPage = () => {
  const { id } = useParams();
  const meals = carouselImages.find((meal) => meal.id === +id);
  return (
    <>
      <div className="mealsContainer">
        {meals.title}
        <div className="meals-item">
          {meals.mealImages.map((meal) => (
            <>
              <div className="meal-img">
                <img key={meal.id} src={meal.mealImage} alt="" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default MealsPage;