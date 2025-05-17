import React from "react";
import { CiStar } from "react-icons/ci";
import "./ProductCard.css";

function ProductCard({image,name, publishing,author,oldPrice,price}) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src="#" alt="Kitap kapağı" />
      </div>
      <div className="product-card__body">
        <div className="product-card__rating">
          {[...Array(5)].map((_, i) => (
            <CiStar key={i} className="product-card__star" />
          ))}
        </div>
        <h3 className="product-card__title">{name}</h3>
        <div className="product-card__meta">
          <p className="product-card__publisher">{publishing}</p>
          <p className="product-card__author">{author}</p>
        </div>
        <div className="product-card__price">
          <p className="product-card__price--old">₺{oldPrice}</p>
          <p className="product-card__price--new">₺{price}</p>
        </div>
        <button className="product-card__button">Sepete Ekle</button>
      </div>
    </div>
  );
}

export default ProductCard;
