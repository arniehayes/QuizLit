import React from "react";
import style from "../styles/pageStyles/questionsPage.module.scss";
import { motion } from "framer-motion";

const QuestionNumber = ({ currentQuestion }) => {
  return (
    <div className={style.titleContainer}>
      <motion.h1
        className={style.title}
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Question {currentQuestion + 1}
      </motion.h1>
    </div>
  );
};

export default QuestionNumber;
