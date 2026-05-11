import "./candies.css";
function Candies({ candyImages }) {
  return (
    <div className="candiesContainer">
      <h2 className="candies_title">أفضل 5 أنواع حلويات</h2>
      <div className="candies_border">
        <ol className="lst_wrap_candies">
          {candyImages.map((candy) => (
            <li>
              <div className="candy_items">
                <div className="candy_img">
                  <img key={candy.id} src={candy.offerImage} alt="" />
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
