import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200 ) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
    console.log(offset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <ul className="header-left">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="header-center">DEV STORE</div>
        <div className="header-right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span className="sparate">5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
