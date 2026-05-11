import { Link } from "react-router-dom";
import { navLinks } from "../../data/dataLinks";
const Navbar = () => {
  return (
    <nav>
      <div className="close">
        <i className="bx bx-x-circle close-icon" />
      </div>
      <ul className="navbar-ul">
        {navLinks.map((item) => (
          <li
           key={item.slug}
          //  className={item.noBorder ? "no-border" : ""}
          >
            <Link className="nav-link" to={`${item.slug}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;