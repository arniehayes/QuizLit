import Link from "next/link";
import React, { useState } from "react";

const Category = () => {
  const categoryList = [
    "Arts & Literature",
    "Film & TV",
    "Food & Drink",
    "General Knowledge",
    "Geography",
    "History",
    "Music",
    "Science",
    "Society & Culture",
    "Sport & Leisure",
  ];

  return (
    <div>
      <h1>Categories: </h1>
      {categoryList.map((category) => (
        <Link href={"/Question"}>
          <button type="submit" id={category}>
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;

