import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
const Navbar = () => {
  return (
    <nav>
      <div className="close">
        <i className="bx bx-x-circle close-icon" />
      </div>
      <ul className="navbar">
        {navLinks.map((item) => (
          <li key={item.slug}>
            <Link className="navbar" to={`${item.slug}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;