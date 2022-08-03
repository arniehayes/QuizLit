import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";

const NextQuestionButton = ({ setNextQuestion }) => {
  return (
      <div className={style.sumbitContainer}>
          <button
              className={cc([style.button, style.buttonSubmit])}
              onClick={() => {
                  setNextQuestion(true);
              }}
              tabIndex="0"
          >
              Next Question
          </button>
      </div>
  )
}

export default NextQuestionButton