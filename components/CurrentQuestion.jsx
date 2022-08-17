import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";

const CurrentQuestion = ({questionArray, currentQuestion}) => {
    console.log("inside of current question: ", questionArray);
  return (
      <div className={style.questionContainer}>
          <span className={style.question}>
              {questionArray[currentQuestion]?.question}
          </span>
      </div>
  )
}

export default CurrentQuestion