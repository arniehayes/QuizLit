import React, { useEffect, useState } from "react";
import style from "../../styles/pageStyles/questionsPage.module.scss";
import GameOver from "../../components/GameOver";
import QuestionNumber from "../../components/QuestionNumber";
import CurrentQuestion from "../../components/CurrentQuestion";
import CurrentAnswers from "../../components/CurrentAnswers";
import SubmitButton from "../../components/SubmitButton";
import NextQuestionButton from "../../components/NextQuestionButton";
import { useRouter } from 'next/router'

const Category = ({ results }) => {
  const router = useRouter();
  console.log({ results });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [submit, setSubmit] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [svgPathCorrect, setSvgPathCorrect] = useState("/");
  const [svgPathWrong, setSvgPathWrong] = useState("/");

  useEffect(() => {
    async function fetchData() {
      const newData = await fetch(
        `https://the-trivia-api.com/api/questions?categories=${router.query.category}&limit=10&difficulty=medium`
      ).then((res) => res.json());
      console.log("newData: ", newData);
      if (!newData.ok) {
        // If there is a server error, you might want to
        // throw an error instead of returning so that the cache is not updated
        // until the next successful request.
        console.log(Error(`Failed to fetch posts, received status ${newData.status}`))
      }
      const newArr = newData.map((data) => ({
        question: data?.question,
        answers: [...data?.incorrectAnswers, data?.correctAnswer].sort(() => Math.random() - 0.5),
        correctAnswer: data?.correctAnswer,
      }));
      setQuestionArray(newArr);
      console.log("questionArray after new call: ", questionArray);
    }
    if (currentQuestion > 9) {
      fetchData();
    }
  },[currentQuestion])

  useEffect(() => {
    const arr = results.map((data) => ({
      question: data?.question,
      answers: [...data?.incorrectAnswers, data?.correctAnswer].sort(() => Math.random() - 0.5),
      correctAnswer: data?.correctAnswer,
    }));
    setQuestionArray(arr);
  }, [results]);

  useEffect(() => {
    if (chosenAnswer && chosenAnswer === questionArray[currentQuestion]?.correctAnswer) {
      setTotalCorrect((current) => current + 1);
      setSvgPathCorrect("/check-svgrepo-com.svg");
      setSvgPathWrong("/cross-svgrepo-com.svg");
    }
    else if (chosenAnswer && submit) {
      setSvgPathWrong("/cross-svgrepo-com.svg");
      setSvgPathCorrect("/check-svgrepo-com.svg");
    }

  }, [submit]);

  useEffect(() => {
    if (chosenAnswer && submit && nextQuestion) {
      setCurrentQuestion((current) => current + 1);
      setSubmit(false);
      setChosenAnswer("");
    }

    if (currentQuestion >= 1) {
      fetch('/api/revalidate');
    }
    
    setNextQuestion(false);
    setSvgPathCorrect("/");
    setSvgPathWrong("/");
  },[nextQuestion]);



  return (
    <div className={style.pageContainer}>
      {currentQuestion < 10 ?
        <div className={style.contentContainer}>
          <QuestionNumber currentQuestion={currentQuestion} />
          <CurrentQuestion questionArray={questionArray} currentQuestion={currentQuestion} />
          <CurrentAnswers questionArray={questionArray} currentQuestion={currentQuestion} setChosenAnswer={setChosenAnswer} srcCorrect={svgPathCorrect} srcWrong={svgPathWrong} submit={submit} />
          <SubmitButton setSubmit={setSubmit} chosenAnswer={chosenAnswer}/>
          <NextQuestionButton setNextQuestion={setNextQuestion} />
      </div> : <GameOver totalCorrect={totalCorrect} />}
    </div>
  );
};

export default Category;

// Getting API data
export const getStaticProps = async ({ params }) => {
  const results = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${params.category}&limit=10&difficulty=medium`
  ).then((res) => res.json());
  if (!results.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    console.log(Error(`Failed to fetch posts, received status ${results.status}`))
  }
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
