import React from "react";
import { useState } from "react";
import HeaderIconItem from "../../components/HeaderIconItem";
import { IoBookmarksSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

import CategoriesMiniMenu from "../../components/CategoriesMiniMenu";

import "./Header.css";

function Header() {


  const [openMenu, setOpenMenu] = useState(false);

  function menuStatus() {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  }

  return (
    <header className="header" id="header">
      {/** Mobile Sidebar Alanı **/}
      
      {/** Mobile Sidebar Alanı :: Son **/}

      {/** Header Üst Kısım :: **/}
      <div className="header__top">
         <button id="mobile__sidebar__hamburger__icon"><RxHamburgerMenu /></button>
        <div className="header__top__logo">
        
          <img src="" alt="EBookLogo" />
        </div>
        <div className="header__top__search">
          <div className="all-menu-area">
            <IoBookmarksSharp
              style={{ color: "orangered", fontSize: "20px" }}
            />
            <button onClick={menuStatus} type="button">
              MENÜ
            </button>
          </div>
          <div className="header__top__search__input__group">
            <a type="button">
              <IoMdSearch style={{ color: "gray", fontSize: "28px" }} />
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

        {/** Mini Kategori Alanı  **/}
        <div
          style={{ display: openMenu ? "block" : "none" }}
          className="categories_mini_menu__wrapper"
        >
          <CategoriesMiniMenu  />
        </div>
        {/** Mini Kategori Alanı :: Son **/}
      </div>

      {/** Header Üst Kısım :: Son **/}
      {/** Header Alt  Kısım ::  **/}
      <div className="header__bottom">
        <div className="header__bottom__categories__item">
          <a href="">Edebiyat Kitapları</a>
        </div>
        <div className="header__bottom__categories__item">
          <a href="">Kırtasiye</a>
        </div>
        <div className="header__bottom__categories__item">
          <a href="">Okula Yardımcı</a>
        </div>
        <div className="header__bottom__categories__item">
          <a href="">Oyuncak</a>
        </div>
        <div className="header__bottom__categories__item">
          <a href="">Sınava Hazırlık</a>
        </div>
        <div className="header__bottom__categories__item">
          <a href="">Kitap Tavsiye</a>
        </div>
        <div className="header__bottom__categories__item">
          <a href="">Tüm Kampanyalar</a>
        </div>
      </div>
      {/** Header Alt Kısım :: Son **/}
    </header>
  );
}

export default Header;
