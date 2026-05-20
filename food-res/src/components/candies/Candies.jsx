import "./candies.css";
import { useSelector } from "react-redux";

function Candies() {
  const { productItems } = useSelector((state) => state.product);

  const candyImages = productItems.filter(candy => candy.category === "offer");

  return (
    <div className="candiesContainer">
      <h2 className="candies_title">أفضل 5 أنواع حلويات</h2>
      <div className="candies_border">
        <ol className="lst_wrap_candies">
          {candyImages.map((candy) => (
            <li>
              <div className="candy_items">
                <div className="candy_img">
                  <img key={candy._id} src={`https://backend-resturant-food-1.onrender.com${candy.image}`} alt="" />
                </div>
                <div className="candy_descrip">
                  <cite className="cite-items">
                    <i class="bi bi-fork-knife"></i>
                    <span> {candy.type} </span>
                  </cite>
                  <h3 className="candy_h3_title">{candy.descrip}</h3>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Candies;