import Link from "next/link";
import React from "react";

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
    <div>
      <h1>Categories: </h1>
      {categoryList.map((category) => (
        <Link key={category.link} href={`/categories/${category.link}`}>
          <a id={category.link}>{category.label}</a>
        </Link>
      ))}
    </div>
  );
};

export default Category;
