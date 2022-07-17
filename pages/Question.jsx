import React from 'react'

const Question = ({apiCall}) => {
  return (
    <div>
      <ul>
        {apiCall.map((data) => (
          <li key={data.id}>{data.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question;


export const getStaticProps = async () => {
  const apiCall = await fetch(
    `https://the-trivia-api.com/api/questions?categories=Science&limit=20&difficulty=easy`
  ).then((response) => response.json());
  console.log(apiCall);
  return {
    props: {
      apiCall,
    },
  };
};