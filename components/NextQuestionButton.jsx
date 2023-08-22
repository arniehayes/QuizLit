import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";
import { motion } from "framer-motion";

const NextQuestionButton = ({ setNextQuestion }) => {
  return (
      <div className={style.sumbitContainer}>
          <motion.button
              className={cc([style.button, style.buttonNext])}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              onClick={() => {
                  setNextQuestion(true);
              }}
              tabIndex="0"
          >
              Next Question
          </motion.button>
      </div>
  )
}

export default NextQuestionButton