import React from "react";
import './HeaderIconItem.css'
function HeaderIconItem({children}) {
  return (
    <div className="header__icon__item">
      <a href="#">{children}</a>
    </div>
  );
}

export default HeaderIconItem;
