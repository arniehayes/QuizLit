import React from 'react'

const [category] = ({ results }) => {
  return (
    <div>
      {results.map((data) => (
        <p>{data.question}</p>
      ))}
    </div>
  );
};

export default [category];


export const getStaticProps = async ({ params }) => {
  const results = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${params.category}&limit=20`
  ).then((res) => res.json());
  return {
    props: {
      results
    },
  };
}

export const getStaticPaths = async () => {
    const response = await fetch(
      `https://the-trivia-api.com/api/categories`
    ).then((res) => res.json());
    const paths = response.map(category => {
        return {
          params: {
            category,
          },
        };
    });
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}