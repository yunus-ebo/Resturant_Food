import "./category.css";
import { useParams } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
const CategoryPage = () => {
  const { category } = useParams();
  const current = navLinks.find((curr) => curr.slug === category); // don't do redux for this
  return (
    <div className="westernMealsContainer">
      <h1>{current.label}</h1>
      <div className="westernMeals-images">
        {current.images.map((img) => (
          <div className="western-datas">
            <div className="western-img">
              <img key={img.id} src={img.image} />
            </div>
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryPage;