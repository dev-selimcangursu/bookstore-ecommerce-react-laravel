  import React from 'react';
  import './MiniCategoryCard.css';

  function MiniCategoryCard({ img, title }) {
    return (
   
      <div className="mini__category__card">
         <a href="">
        <div className="image__wrapper">
          <img className="card__image" src={img} alt={title} />
        </div>
        <span className="card__title">{title}</span>
        </a>
      </div>
  
    );
  }

  export default MiniCategoryCard;
