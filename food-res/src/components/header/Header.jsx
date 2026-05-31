import "./header.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="top-header">
        <div className="top-rightSection">
          <div className="search-icon">
            <i class="fa-brands fa-sistrix"></i>
          </div>
          <Link to={"/authentication"} className="user-icon">
            <i class="fa-regular fa-user"></i>
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
