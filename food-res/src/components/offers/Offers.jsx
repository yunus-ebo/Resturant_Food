import './offers.css'
import OffersCarousel from './OffersCarousel'
const Offers = () => {
  return (
    <div className='offersContainer'>
      <div className="offers_btn">
        حزمة عروض <i class="bi bi-arrow-left"></i>
      </div>
      <OffersCarousel />
    </div>
  );
};
export default Offers;