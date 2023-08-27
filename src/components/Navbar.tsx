import Style from "./Navbar.module.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <nav className={Style.navbar}>
        {/* Hamburger */}
        <div className={Style.mobileMenu}>
          <HiMenuAlt1 />
        </div>
        <div>Periodic Table</div>
        <div className={Style.searchIcon}>
          <BiSearchAlt />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
// {#292b3a}
