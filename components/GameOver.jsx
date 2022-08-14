import React from 'react'
import style from "../styles/componentStyles/gameOver.module.scss";
import Link from "next/link";

const GameOver = ({ totalCorrect }) => {
  return (
    <div className={style.contentContainer}>
        <div className={style.header}>GAME OVER</div>
        <div className={style.score}>
            {Math.floor(totalCorrect) + "/10"}
          </div>
          <div className={style.anchorContainer}>
              <Link href={`/categories`}>
                  <a className={style.anchor}>New Game!</a>
              </Link>
          </div>
    </div>
  )
}

export default GameOver;
