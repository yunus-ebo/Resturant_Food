import "./category.css";
const Category = ({ pizza }) => {
  return (
    <div className="categoryContainer">
      <h2> أطباقنا الشهية </h2>
      <div className="categories">
        {pizza.map((pizz) => (
          <div className="category-things">
            <div className="category-img">
              <img src={pizz.caros} alt="" />
            </div>
            <div className="category-title">
              <h3>{pizz.title}</h3>
              <p>{pizz.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="category-btn">
        <button> حزمة أطباق بيتزا <i class="bi bi-arrow-left"></i> </button>
      </div>
    </div>
  );
};
export default Category;