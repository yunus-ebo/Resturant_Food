import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="footer-logo">
          <div>
            <a href="https://resturant-food.onrender.com">
              <img src="../../../public/images/shLogo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-topList">
          <ul className="main-topList">
            <li>
              <ul>
                <li> الصفحة الرئيسية </li>
                <li> أكل شرقي </li>
                <li> أكل غربي </li>
                <li> مقبلات </li>
                <li> مشروبات </li>
              </ul>
            </li>
            <li>
              <ul>
                <li> قوم ادبوووك ولاااك </li>
                <li> انتوا فلتوا فلتوا </li>
                <li> لأنك حريمي </li>
                <li> آني حتى مشي ما امشي </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer-bottomList"></div>
      </div>
      <div className="bottom-footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam.</p>
      </div>
    </footer>
  );
};
export default Footer;