import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import { motion } from "framer-motion";

const CurrentQuestion = ({questionArray, currentQuestion}) => {
  return (
      <motion.div 
      className={style.questionContainer}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.4 }}
      viewport={{ once: true }}>
          <span className={style.question}>
              {questionArray[currentQuestion]?.question}
          </span>
      </motion.div>
  )
}

export default CurrentQuestion