import React from "react";
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";

const CurrentAnswers = ({
  questionArray,
  currentQuestion,
  setChosenAnswer,
  submit,
  srcCorrect,
  srcWrong,
}) => {
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
                  console.log(submit);
                }}
              >
                <span>{answers}</span>
                {questionArray[currentQuestion]?.correctAnswer === answers ? (
                  <img
                    src={srcCorrect}
                    width={30}
                    height={30}
                    className={cc([
                      style.answerStatus,
                      {
                        [style.display]:
                          submit &&
                          questionArray[currentQuestion]?.correctAnswer === answers,
                      },
                    ])}
                  />
                ) : (
                  <img
                    src={srcWrong}
                    width={30}
                    height={30}
                    className={cc([
                      style.answerStatus,
                      {
                        [style.display]:
                          submit &&
                          questionArray[currentQuestion]?.correctAnswer,
                      },
                    ])}
                  />
                )}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrentAnswers;
