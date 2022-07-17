import React, { useState } from "react";

const StartGame = () => {
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
        <button type="submit" id={category}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default StartGame;

