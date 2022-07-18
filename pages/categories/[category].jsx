import React from "react";

const Category = ({ results }) => {
  console.log({ results });
  return (
    <div>
      {results.length > 0 && results.map((data) => (
        <p key={data?.id}>{data?.question}</p>
      ))}
    </div>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  const results = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${params.category}&limit=20`
  ).then((res) => res.json());
  return {
    props: {
      results,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://the-trivia-api.com/api/categories`
  ).then((res) => res.json());

  // https://the-trivia-api.com/api/categories returns an object with all the categories
  // since it is an object and not an array, we use Object.keys to get an array of all the categories
  const categories = Object.keys(response);

  return {
    paths: categories.map((category) => {
      return {
        params: {
          // since the categories have spaces and & symbols, we first replace all & with "and"
          // then replace empty spaces with underscore then lowercase to create each dynamic paths
          category: category
            .replace("&", "and")
            .split(" ")
            .join("_")
            .toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
};
