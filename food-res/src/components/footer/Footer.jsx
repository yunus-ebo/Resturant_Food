import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="footer-logo">
          <div>
            {/* <a href="https://resturant-food.onrender.com"></a> */}
              <img src="../../../public/images/shLogo.png" alt="" />     
          </div>
        </div>
        <div className="footer-topList">
          <ul className="order-topList">
            <li>
              <ul>
                <li> الصفحة الرئيسية </li>
                <li> وجبات غربية </li>
                <li> مأكولات بحرية </li>
                <li> مشاوي </li>
                <li> فخارات </li>
              </ul>
            </li>
            <li>
              <ul>
                <li> بيتزا </li>
                <li> مقبلات باردة </li>
                <li> مقبلات ساخنة </li>
                <li> شوربات </li>
                <li> سلطات </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer-middleList">
          <h2 className="middle-title"> تابعنا على حساباتنا </h2> 
          <ul className="order-middleList">
            <li className="middle-lists">
              <a href="" className="social_icon"><i class="bi bi-envelope-fill"></i></a>
            </li>
            <li className="middle-lists">
              <a href="" className="social_icon"><i class="bi bi-whatsapp"></i></a>
            </li>
            <li className="middle-lists">
              <a href="" className="social_icon"><i class="bi bi-facebook"></i></a>
            </li>
            <li className="middle-lists">
              <a href="" className="social_icon"><i class="bi bi-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <h4 className="bottom-footer-title"><span className="copy-entity">&copy; 2026</span> Restaurant Food </h4>
        <div className="bottom-footer-texts">
          <span> أفضل النكهات الشرقية والغربية في مكان واحد </span>
          <p> يوميا من 10 صباحا حتى 12 مساءا </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;