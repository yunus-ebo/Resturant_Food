import "./singlePro.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../redux/apiCalls/productApiCall";
import { imageUrI } from "../../imageUrI";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productItem } = useSelector((state) => state.product);
  const { id } = useParams();

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(id));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="singleProductContainer">
      <div className="single-img">
        <img src={imageUrI(productItem?.images[imageIndex])} alt="" />
      </div>
      <div className="single-different-imgs">
        {productItem?.images.map((source, index) => (
          <div className="single-img-span">
            <img
              key={index}
              src={imageUrI(source)}
              onClick={() => setImageIndex(index)}
            />
            <p>انقر لترى الصورة كاملة</p>
          </div>
        ))}
      </div>
      <p className="descrip">{productItem?.description}</p>
    </div>
  );
};
export default SingleProduct;