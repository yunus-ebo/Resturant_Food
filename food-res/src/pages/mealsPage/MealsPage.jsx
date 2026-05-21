import "./mealsPage.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import {fetchProductById} from "../../redux/apiCalls/productApiCall"
const MealsPage = () => {
  const { productItems } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <div className="mealsContainer">
        {productItems.title}
        <div className="meals-item">
          hello different meals
        </div>
      </div>
    </>
  );
};
export default MealsPage;