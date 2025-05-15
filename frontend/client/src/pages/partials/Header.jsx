import React from "react";
import HeaderIconItem from "../../components/HeaderIconItem";
import { IoBookmarksSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";

import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      {/** Header Üst Kısım :: **/}
      <div className="header__top">
        <div className="header__top__logo">
          <img src="" alt="EBookLogo" />
        </div>
        <div className="header__top__search">
          <div className="all-menu-area">
            <IoBookmarksSharp
              style={{ color: "orangered", fontSize: "20px" }}
            />
            <a type="button">MENÜ</a>
          </div>
          <div className="header__top__search__input__group">
            <a type="button">
              <IoMdSearch style={{ color: "orangered", fontSize: "28px" }} />
            </a>
            <input
              placeholder="Aradığınız ürünün adını yazınız..."
              type="text"
              className="search__input"
            />
          </div>
        </div>
        <div className="header__top__icons">
          <HeaderIconItem>
            <MdFavorite style={{ color: "orangered", fontSize: "30px" }} />
          </HeaderIconItem>
          <HeaderIconItem>
            <FaRegUserCircle style={{ color: "orangered", fontSize: "30px" }} />
          </HeaderIconItem>
          <HeaderIconItem>
            <BsBasket style={{ color: "orangered", fontSize: "30px" }} />
          </HeaderIconItem>
        </div>
      </div>
      {/** Header Üst Kısım :: Son **/}

      {/** Header Alt  Kısım ::  **/}
      <div className="header__bottom"></div>
      {/** Header Alt Kısım :: Son **/}
    </header>
  );
}

export default Header;
