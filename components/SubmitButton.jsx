import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";

const SubmitButton = ({setSubmit, chosenAnswer}) => {
  return (
      <div className={style.sumbitContainer}>
          <button
              className={cc([style.button, style.buttonSubmit])}
              onClick={() => {
                  chosenAnswer ? setSubmit(true) : null
              }}
              tabIndex="0"
          >
              Submit
          </button>
      </div>
  )
}

export default SubmitButton