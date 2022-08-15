import React, { useState } from "react";
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";

const CurrentAnswers = ({
  questionArray,
  currentQuestion,
  setChosenAnswer,
  chosenAnswer,
  submit,
  srcCorrect,
  srcWrong,
}) => {

const [pickedButton, setPickedButton] = useState("")

  return (
    <div className={style.answerContainer}>
      <ul className={style.answerList}>
        {questionArray?.length > 0 &&
          questionArray[currentQuestion]?.answers.map((answers, id) => (
            <li className={style.answers} key={id}>
              <button
                className={cc([style.button, 
                  {
                    [style.buttonChosen]:
                     submit && pickedButton === questionArray[currentQuestion]?.answers[id],
                    [style.buttonNotChosen]: 
                     submit && pickedButton !== questionArray[currentQuestion]?.answers[id]}])}
                onClick={() => {
                  setChosenAnswer(answers);
                  setPickedButton(answers);
                  console.log("you clicked id :", answers);
                  console.log(questionArray[currentQuestion]?.answers[id])
                }}
              >
                <span>{answers}</span>
                {pickedButton && submit && questionArray[currentQuestion]?.correctAnswer === answers && <img
                    src={srcCorrect}
                    width={30}
                    height={30}
                    className={style.answerStatus}
                  />}
                {pickedButton && submit && questionArray[currentQuestion]?.correctAnswer !== answers && <img
                  src={srcWrong}
                  width={30}
                  height={30}
                  className={style.answerStatus}
                />}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrentAnswers;
