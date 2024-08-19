import React from "react";
import style from "../styles/componentStyles/categoryType.module.scss"

const CategoryType = ({category}) => {
  return (
    <div className={style.categoryContainer}>
      <span className={style.categoryTitle}>
       {category}
      </span>
    </div>
  );
};

export default CategoryType;
