import "./singlePro.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../redux/apiCalls/productApiCall";
import { imageUrI } from "../../imageUrI";
import { addItemToOrders } from "../../redux/apiCalls/cartApiCall";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productItem } = useSelector((state) => state.product);
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const [qty,setQty] = useState(1);
  useEffect(() => {
    dispatch(fetchProductById(id));
    window.scrollTo(0, 0);
  }, [id]);
  const addToOrdersHandler = () => {
    dispatch(
      addItemToOrders({
        _id: productItem?._id, 
        image: productItem?.image,
        images: productItem?.images[imageIndex],
        description: productItem?.description,
        price: productItem?.price,
      }),
    );
  };
  return (
    <div className="singleProductContainer">
      <div className="single-img">
        <img src={imageUrI(productItem?.images[imageIndex].image)} alt="" />
      </div>
      <div className="single-different-imgs">
        {productItem?.images.map((source, index) => (
          <div className="single-img-span">
            <img
              key={index}
              src={imageUrI(source?.image)}
              onClick={() => setImageIndex(index)}
            />
            <p>انقر لترى الصورة كاملة</p>
          </div>
        ))}
      </div>
      <p className="descrip">{productItem?.description}</p>
      <button onClick={addToOrdersHandler}> أضف لسلة طلباتك </button>
    </div>
  );
};
export default SingleProduct;

/*
INFO:
--when images is object do that: productItem?.images[imageIndex].image,
it will be images[0].image
it will be images[1].image
not that productItem?.images[imageIndex.image]


*/ 