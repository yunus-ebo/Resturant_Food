import "./order.css";
import { useSelector } from "react-redux";
import { imageUrI } from "../../imageUrI";
import { useState } from "react";
const MyOrder = () => {
  const { orderCartItems } = useSelector((state) => state.ordersCart);
  return (
    <div>
      {orderCartItems.map((order) => (
        <>
          <div>
            <img src={imageUrI(order?.images)} alt="" />
          </div>
          <p>{order?.description}</p>
        </>
      ))}
    </div>
  );
};

export default MyOrder;
