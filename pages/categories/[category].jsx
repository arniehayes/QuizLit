import React, { useState } from "react";
import style from "../../styles/component/questionsPage.module.scss";
import cc from "classcat";

const Category = ({ results }) => {

  console.log({results})

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // store questions in an array
  const questionArray = results.map((data) => (
    {
      question: data?.question,
      answer: data?.correctAnswer,
      incorrectAnswers: data?.incorrectAnswers,
    }
  ))

  return (
    <div className={style.pageContainer}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <h1 className={style.title}> Question {currentQuestion + 1} </h1>
        </div>
        <div className={style.questionContainer}>
          <span className={style.question}>
            {questionArray[currentQuestion].question}
          </span>
        </div>
        <div className={style.answerContainer}>
          <ul className={style.answerList}>
            {questionArray[currentQuestion].incorrectAnswers.map((answer) => (
              <li className={style.answers}>
                <button className={style.button}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.sumbitContainer}>
          <button className={cc([style.button, style.buttonSubmit])}>
            Submit
          </button>
        </div>
      </div>
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
