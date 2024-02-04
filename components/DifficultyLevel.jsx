import React from 'react'
import style from "../styles/componentStyles/difficultyLevel.module.scss"
import cc from "classcat";

const DifficultyLevel = ({diff}) => {
  console.log(diff);
  return (
    <div className={style.difficultyContainer}>
        <span className={cc([style.text, {
          [style.green]: diff == "Easy",
          [style.orange]: diff == "Medium",
          [style.red]: diff == "Hard"
        }])}>Difficulty: {diff}</span>
    </div>
  )
}

export default DifficultyLevel