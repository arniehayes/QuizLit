import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";

const CurrentQuestion = ({questionArray, currentQuestion}) => {
  return (
      <div className={style.questionContainer}>
          <span className={style.question}>
              {questionArray[currentQuestion]?.question}
          </span>
      </div>
  )
}

export default CurrentQuestion