import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import cc from "classcat";
import { motion } from "framer-motion";

const SubmitButton = ({setSubmit, chosenAnswer}) => {
  return (
      <div className={style.sumbitContainer}>
          <motion.button
              className={cc([style.button, style.buttonSubmit])}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              onClick={() => {
                  chosenAnswer ? setSubmit(true) : null
              }}
              tabIndex="0"
          >
              Submit
          </motion.button>
      </div>
  )
}

export default SubmitButton