import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";

const QuestionNumber = ({currentQuestion}) => {
  return (
      <div className={style.titleContainer}>
          <h1 className={style.title}> Question {currentQuestion + 1} </h1>
      </div>
  )
}

export default QuestionNumber