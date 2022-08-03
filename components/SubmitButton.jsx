import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";

const SubmitButton = ({setSubmit}) => {
  return (
      <div className={style.sumbitContainer}>
          <button
              className={cc([style.button, style.buttonSubmit])}
              onClick={() => {
                  setSubmit(true);
              }}
              tabIndex="0"
          >
              Submit
          </button>
      </div>
  )
}

export default SubmitButton