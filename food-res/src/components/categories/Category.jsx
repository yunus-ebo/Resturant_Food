import "./category.css";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { imageUrI } from "../../imageUrI";

const Category = () => {
  const { productItems } = useSelector((state) => state.product);
  const categoryItems = productItems.filter(
    (cate) => cate.category === "pizza",
  );

  return (
    <div className="categoryContainer">
      <h2 className="category-title"> أطباقنا الشهية </h2>
      <div className="categories">
        {categoryItems.map((category) => (
          <Link to={`/categoriesPage/${category._id}`} className="category-links">
            <div className="category-img">
              <img
                src={imageUrI(category.image)}
                alt=""
              />
            </div>
            <div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default Category;
