import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";

const CurrentAnswers = ({questionArray, currentQuestion, setChosenAnswer}) => {
  return (
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
  )
}

export default CurrentAnswers