import "./candies.css";
import { useSelector } from "react-redux";
import { imageUrI } from "../../imageUrI";
import { Link } from "react-router-dom";
function Candies() {
  const { productItems } = useSelector((state) => state.product);

  const candyImages = productItems.filter(
    (candy) => candy.category === "dessert",
  );

  return (
    <div className="candiesContainer">
      <h2 className="candies_title">أفضل 5 أنواع حلويات</h2>
      <div className="candies_border">
        <ol className="lst_wrap_candies">
          {candyImages.map((candy) => (
            <li>
              <Link to={`/candyPage/${candy._id}`} className="candy_items">
                <div className="candy_img">
                  <img key={candy._id} src={imageUrI(candy.image)} alt="" />
                </div>
                <div className="candy_descrip">
                  <cite className="cite-items">
                    <i class="bi bi-fork-knife"></i>
                    <span> {candy.title} </span>
                  </cite>
                  <h3 className="candy_h3_title">{candy.description}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Candies;
