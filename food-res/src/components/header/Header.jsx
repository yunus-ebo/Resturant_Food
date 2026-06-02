import "./header.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { CartCheck } from "@boxicons/react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="top-header">
        <div className="top-rightSection">
          <div className="search-icon topRight_divs">
            <i class="fa-brands fa-sistrix"></i>
          </div>
          <Link to={"/authentication"} className="user-icon topRight_divs">
            <i class="fa-regular fa-user"></i>
          </Link>
          <Link to={"/myOrder"} className="cart-icon topRight_divs">
            <CartCheck />
          </Link>
        </div>
        <div className="top-middleSection">
          <img
            className="logo-header"
            src="../../../public/images/shLogo.png"
            alt=""
          />
        </div>
        <div className={`top-leftSection ${toggle && "open"}`}>
          <div className="icon-closeLeft" onClick={() => setToggle(false)}>
            <i class="bx bx-x-circle" />
          </div>
          <li onClick={() => setToggle(false)}>
            <Link className="header-link" to={"/orders"}>
              طلباتك
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link className="header-link" to={"/kitchen"}>
              المطبخ
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link className="header-link" to={"/contactUs"}>
              تواصل معنا
            </Link>
          </li>
        </div>
        <div onClick={() => setToggle(true)} className="menubar">
          <i className="bx bx-menu" />
        </div>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;