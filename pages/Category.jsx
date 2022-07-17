import Link from "next/link";
import React, { useState } from "react";

const Category = () => {

  const [category, setCategory] = useState("");

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
      {categoryList.map((data) => (
        <Link href={`/Categories/${category}`}>
          <button type="submit" id={data} onClick={() => setCategory(data)}>
            {data}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;

