import Link from "next/link";
import React from "react";
import style from "../../styles/component/categories.module.scss";
import cc from "classcat";

const Category = () => {
  const categoryList = [
    { label: "Arts & Literature", link: "arts_and_literature" },
    { label: "Film & TV", link: "film_&_tv" },
    { label: "Food & Drink", link: "food_and_drink" },
    { label: "General Knowledge", link: "general_knowledge" },
    { label: "Geography", link: "geography" },
    { label: "History", link: "history" },
    { label: "Music", link: "music" },
    { label: "Science", link: "science" },
    { label: "Society & Culture", link: "society_and_culture" },
    { label: "Sport & Leisure", link: "sport_and_leisure" },
  ];

  return (
    <div className={style.pageContainer}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <h1 className={style.title}> Categories </h1>
        </div>
        <div className={style.categoryContainer}>
          {categoryList.map((category) => (
            <Link key={category.link} href={`/categories/${category.link}`}>
              <a className={style.anchor} id={category.link}>
                {category.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
