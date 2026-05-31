import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import { imageUrI } from "../../imageUrI";
import { Link } from "react-router-dom";

const OffersCarousel = () => {
  const [indexOffer, setIndexOffer] = useState(0);
  const [startX, setStartX] = useState(0);

  const dispatch = useDispatch();
  const { productItems } = useSelector((state) => state.product);

  const offerCarousel = productItems.filter(
    (offer) => offer.category === "offer",
  );

  let offerSlide = 2;
  let offerTotal = Math.ceil(offerCarousel.length / offerSlide);
  const handleOfferRight = () => {
    // setIndexOffer((prev) => (prev === 0 ? offerCarousel.length - 3 : prev - 1));
    setIndexOffer((prev) => (prev - 1 + offerTotal) % offerTotal);
  };
  const handleOfferLeft = () => {
    setIndexOffer((prev) => (prev + 1) % offerTotal);
  };

  const handleOfferTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  const handleOfferTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      handleOfferLeft();
    } else if (endX - startX > 50) {
      handleOfferRight();
    }
  };

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  return (
    <>
      <div className="offersCarouselContainer">
        <div className="offer_carousel_container">
          <div
            className="offer_items"
            style={{
              transform: `translateX(+${indexOffer * 100}%)`,
            }}
            onTouchStart={handleOfferTouchStart}
            onTouchEnd={handleOfferTouchEnd}
          >
            {offerCarousel.map((offer) => {
              const finalDiscount =
                offer?.price - (offer?.price * offer?.discount) / 100;
              const { description, image, price, discount } = offer;
              return (
                <Link
                  to={`/offerPage/${offer._id}`}
                  style={{
                    borderRadius: offer.hasRadius === true ? "5px" : "",
                  }}
                  className="offer_item"
                  key={offer.id}
                >
                  <div className="offer_item_img">
                    <img src={imageUrI(image)} alt="" />
                  </div>
                  <div className="offer_item_offer_descrip">
                    <p className="Subtitle_descrip">{description}</p>
                    {discount > 0 ? (
                      <div className="offer_item_prices">
                        <p className="percent_discount">
                          تخفيضات بنسبة {discount}%
                        </p>
                        <div className="bottom_item_prices">
                          <span>{price}$</span>
                          <b>{finalDiscount}$</b>
                        </div>
                      </div>
                    ) : (
                      <div>{price}</div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="offer_carousel_bottom">
        <div className="offer_arrows">
          <div className="offer_arrow-right" onClick={handleOfferRight}>
            <i class="bi bi-arrow-right-short"></i>
          </div>
          <div className="offer_arrow-left" onClick={handleOfferLeft}>
            <i class="bi bi-arrow-left-short"></i>
          </div>
        </div>
        <div className="offer_bottom__text">
          <span>
            انقر<i class="bi bi-arrow-up-short"></i>
          </span>
        </div>
      </div>
    </>
  );
};
export default OffersCarousel;
