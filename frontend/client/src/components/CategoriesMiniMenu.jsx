// src/components/CategoriesMiniMenu.jsx
import React, { useEffect, useState } from "react";
import "./CategoriesMiniMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSubCategories } from "../features/categories/categoriesSlice";

function CategoriesMiniMenu() {
  
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const subcategories = useSelector((state) => state.categories.subcategories); 

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
  }, [dispatch]);

  const filteredSubcategories = subcategories.filter(
    (sub) => sub.parent_category_id === selectedCategoryId
  );

  return (
    <div className="categories__mini__menu__area">
      <div className="categories__mini__menu__items">
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  width: "100%",
                }}
                onClick={() => setSelectedCategoryId(item.id)}
                type="button"
              >
                {item.category_name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="categories__mini__menu__main">
        {filteredSubcategories.length > 0 ? (
          filteredSubcategories.map((sub) => (
            <div key={sub.id} className="category__item__card">
              {sub.category_name}
            </div>
          ))
        ) : ''}
      </div>
    </div>
  );
}

export default CategoriesMiniMenu;
