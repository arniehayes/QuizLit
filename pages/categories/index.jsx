import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../../styles/pageStyles/categories.module.scss";
import Image from "next/image";

const Category = () => {

  const categoryList = [
    {
      label: "Arts & Literature",
      link: "arts_and_literature",
      path: "/painting-art-svgrepo-com.svg",
    },
    {
      label: "Film & TV",
      link: "film_and_tv",
      path: "/film-strip-svgrepo-com.svg",
    },
    {
      label: "Food & Drink",
      link: "food_and_drink",
      path: "/fast-food-svgrepo-com.svg",
    },
    {
      label: "General Knowledge",
      link: "general_knowledge",
      path: "/book-svgrepo-com.svg",
    },
    {
      label: "Geography",
      link: "geography",
      path: "/americasglobe-svgrepo-com.svg",
    },
    {
      label: "History",
      link: "history",
      path: "/history-svgrepo-com.svg",
    },
    {
      label: "Music",
      link: "music",
      path: "/music-svgrepo-com.svg",
    },
    {
      label: "Science",
      link: "science",
      path: "/science-svgrepo-com.svg",
    },
    {
      label: "Society & Culture",
      link: "society_and_culture",
      path: "/group-svgrepo-com.svg",
    },
    {
      label: "Sport & Leisure",
      link: "sport_and_leisure",
      path: "/tennis-svgrepo-com.svg",
    },
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
                <Image src={category.path} width={60} height={60} />
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
