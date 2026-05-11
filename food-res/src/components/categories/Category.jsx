import "./category.css";
const Category = ({ pizzaItems }) => {
  return (
    <div className="categoryContainer">
      <h2 className="category-title"> أطباقنا الشهية </h2>
      <div className="categories">
        {pizzaItems.map((pizza) => (
          <div className="category-things">
            <div className="category-img">
              <img src={pizza.pizImage} alt="" />
            </div>
            <div>
              <h3>{pizza.title}</h3>
              <p>{pizza.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default Category;