import "./order.css";
import { useSelector } from "react-redux";
import { imageUrI } from "../../imageUrI";
import { useState } from "react";
const MyOrder = () => {
  const { orderCartItems } = useSelector((state) => state.ordersCart);
  const[imgIndex,setImgIndex] =useState(0)
  return (
    <div>
      {orderCartItems.map((order) => (
        <>
          <div>
            <img src={imageUrI(order?.images[imgIndex])} alt="" />
          </div>
          <div>
            {order?.images.map((img,index) => (
              <img key={index} src={imageUrI(img)} onClick={() => setImgIndex(index)}/>
            ))}
            <p>{order?.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default MyOrder;
