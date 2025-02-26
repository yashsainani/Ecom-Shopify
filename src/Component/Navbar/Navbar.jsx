import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logOutfn = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li
          onClick={() => {
            navigate("/home");
          }}
        >
          <Link to={"/home"} className={styles.link}>
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            navigate("/products");
          }}
        >
          <Link to={"/products"} className={styles.link}>
            Products
          </Link>
        </li>
        <li
          onClick={() => {
            navigate("/user");
          }}
        >
          <Link to={"/user"} className={styles.link}>
            Users
          </Link>
        </li>
        <li
          onClick={() => {
            navigate("/contact");
          }}
        >
          <Link to={"/contact"} className={styles.link}>
            Contact
          </Link>
        </li>
        <li onClick={logOutfn}>
          <FiLogOut />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;