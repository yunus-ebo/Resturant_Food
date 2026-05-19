import './banner.css'
import singleBanner from '../../assets/images/kabab.png'
import { useEffect } from "react";
import {useDispatch,useSelector } from 'react-redux'
import {fetchProducts} from '../../redux/apiCalls/productApiCall'
const BannerPage = () => {

  const dispatch = useDispatch();
  const {productItem} = useSelector(state => state.product);



  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  },[]);

  return(
     <div>
        <div className="singleBanner-img">
          <img src={singleBanner} alt="" />
          <span>hello world</span>
        </div>
     </div>
  );
};

export default BannerPage;