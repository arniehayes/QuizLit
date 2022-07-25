import React, { useEffect, useState } from "react";
import style from "../../styles/component/questionsPage.module.scss";
import cc from "classcat";

const Category = ({ results }) => {
  console.log({ results });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState();
  const [submit, setSubmit] = useState(false);

  // store questions in an array
  const questionArray = results.map((data) => ({
    question: data?.question,
    answers: data?.incorrectAnswers,
    correctAnswer: data?.correctAnswer,
    // incorrectAnswers: data?.incorrectAnswers,
  }));
  console.log("Question Array: ", questionArray);

  // const handleAnswer = (answers) => {
  //   setChosenAnswer(answers);
  //   console.log("chosen answer: ", chosenAnswer);
  // };

  useEffect(() => {
    console.log(questionArray[currentQuestion].answer);
    if (chosenAnswer === questionArray[currentQuestion].correctAnswer) {
      console.log("CORRECT!");
      setCurrentQuestion((current) => current + 1);
    }
  },[submit]);


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
            {questionArray[currentQuestion].answers.map((answers, id) => (
              <li className={style.answers} key={id}>
                <button
                  className={style.button}
                  onClick={() => {
                    setChosenAnswer(answers),
                      console.log("chosen answer:", chosenAnswer);
                  }}
                  type="submit"
                >
                  {answers}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.sumbitContainer}>
          <button
            className={cc([style.button, style.buttonSubmit])}
            onClick={() => {
              setSubmit(true), console.log("submitted answer: ", chosenAnswer);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;

// Getting API data
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
