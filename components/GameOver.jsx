import React from "react";
import style from "../styles/componentStyles/gameOver.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const GameOver = ({ totalCorrect }) => {
  return (
    <div className={style.contentContainer}>
      <motion.div
        className={style.header}
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>GAME OVER</p>
      </motion.div>
      <motion.div
        className={style.score}
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {Math.floor(totalCorrect) + "/10"}
      </motion.div>
      <div className={style.anchorContainer}>
        <Link href={`/categories`}>
          <motion.a
            className={style.anchor}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            New Game!
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
