import "./order.css";
import { useSelector, useDispatch } from "react-redux";
import { imageUrI } from "../../imageUrI";
import {removeItemFromCart} from '../../redux/apiCalls/cartApiCall'

const MyOrder = () => {
  const { orderCartItems } = useSelector((state) => state.ordersCart);
  const dispatch = useDispatch();
  return (
    <div className="OrdersContainer">
      {orderCartItems.map((order) => (
        <div className="orders_data">
          <div>
            <img src={imageUrI(order.images)} alt="" />
          </div>
          <p>{order.description}</p>
          <div className="orderRemove-icon">
            <i onClick={() => dispatch(removeItemFromCart(order._id))} class="bi bi-trash2-fill"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;