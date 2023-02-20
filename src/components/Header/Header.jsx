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
  return (
    <header className="main-header">
      <div className="header-content">
        <ul className="header-left">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="header-center">DEV STORE</div>
        <div className="header-right">
            <TbSearch/>
            <AiOutlineHeart/>
            <span className="cart-icon">
                <CgShoppingCart/>
                <span>5</span>
            </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
