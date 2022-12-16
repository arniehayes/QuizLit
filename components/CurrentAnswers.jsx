import React, { useState } from "react";
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";
import { motion } from "framer-motion";

const CurrentAnswers = ({
  questionArray,
  currentQuestion,
  setChosenAnswer,
  submit,
  srcCorrect,
  srcWrong,
}) => {
  const [pickedButton, setPickedButton] = useState("");

  return (
    <div className={style.answerContainer}>
      <ul className={style.answerList}>
        {questionArray?.length > 0 &&
          questionArray[currentQuestion]?.answers.map((answers, id) => (
            <li className={style.answers} key={id}>
              <motion.button
                id="btn"
                className={cc([
                  style.button,
                  {
                    [style.buttonChosen]:
                      submit &&
                      pickedButton ===
                        questionArray[currentQuestion]?.answers[id],
                    [style.buttonNotChosen]:
                      submit &&
                      pickedButton !==
                        questionArray[currentQuestion]?.answers[id],
                  },
                ])}
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                onClick={() => {
                  setChosenAnswer(answers);
                  setPickedButton(answers);
                }}
              >
                <span>{answers}</span>
                {pickedButton &&
                  submit &&
                  questionArray[currentQuestion]?.correctAnswer === answers && (
                    <motion.img
                      src={srcCorrect}
                      width={30}
                      height={30}
                      className={style.answerStatus}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                    />
                  )}
                {pickedButton &&
                  submit &&
                  questionArray[currentQuestion]?.correctAnswer !== answers && (
                    <motion.img
                      src={srcWrong}
                      width={30}
                      height={30}
                      className={style.answerStatus}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                    />
                  )}
              </motion.button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrentAnswers;
