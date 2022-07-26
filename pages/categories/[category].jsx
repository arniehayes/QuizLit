import React, { useEffect, useState } from "react";
import style from "../../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";
import GameOver from "../../components/GameOver";

const Category = ({ results }) => {
  console.log({ results });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [submit, setSubmit] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const [questionArray, setQuestionArray] = useState([]);

  useEffect(() => {
    const arr = results.map((data) => ({
      question: data?.question,
      answers: [...data?.incorrectAnswers, data?.correctAnswer].sort(() => Math.random() - 0.5), // randomize this
      correctAnswer: data?.correctAnswer,
    }));
    setQuestionArray(arr);
  }, [results]);

  useEffect(() => {
    console.log("CHOSEN ANSWER: ", chosenAnswer);
    if (chosenAnswer && chosenAnswer === questionArray[currentQuestion]?.correctAnswer) {
      console.log("YOU ARE CORRECT");
      setTotalCorrect((current) => current + 1);
      setCurrentQuestion((current) => current + 1);
      setSubmit(false);
      setChosenAnswer("");
    }
    else if (chosenAnswer && submit) {
      setCurrentQuestion((current) => current + 1);
      setSubmit(false);
      setChosenAnswer("");
    }
    console.log("Total Correct = ", totalCorrect);
    // resetting state
    setSubmit(false);
    setChosenAnswer("");
  }, [submit]);

  return (
    <div className={style.pageContainer}>
      {currentQuestion < 20 ? <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <h1 className={style.title}> Question {currentQuestion + 1} </h1>
        </div>
        <div className={style.questionContainer}>
          <span className={style.question}>
            {questionArray[currentQuestion]?.question}
          </span>
        </div>
        <div className={style.answerContainer}>
          <ul className={style.answerList}>
            {questionArray?.length > 0 &&
              questionArray[currentQuestion]?.answers.map((answers, id) => (
                <li className={style.answers} key={id}>
                  <button
                    className={style.button}
                    onClick={() => {
                      setChosenAnswer(answers);
                    }}
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
              setSubmit(true);
            }}
          >
            Submit
          </button>
        </div>
      </div> : <GameOver totalCorrect={totalCorrect} />}
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
