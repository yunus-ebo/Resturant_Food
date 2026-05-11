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
              <a href="">email</a>
            </li>
            <li className="middle-lists">
              <a href="">whatsapp</a>
            </li>
            <li className="middle-lists">
              <a href="">facebook</a>
            </li>
            <li className="middle-lists">
              <a href="">instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam.</p>
      </div>
    </footer>
  );
};
export default Footer;