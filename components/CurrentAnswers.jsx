import React from 'react'
import style from "../styles/pageStyles/questionsPage.module.scss";
import Image from "next/image";

const CurrentAnswers = ({ questionArray, currentQuestion, setChosenAnswer, correctAnswer, srcCorrect, srcWrong }) => {
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
                                }}
                            >
                                {answers}
                                
                                {
                                    // Todo: Only show icons on the answer that was chosen
                                    // if the answer is correct then show the svg on the correct answer
                                    // if the answer if wrong then show the svg on the correct AND wrong answer
                                    correctAnswer ?
                                    <Image src={srcCorrect} width={30} height={30} className={style.answerStatus} /> :
                                    <>
                                        <Image src={srcWrong} width={30} height={30} className={style.answerStatus} />
                                        <Image src={srcCorrect} width={30} height={30} className={style.answerStatus} />
                                    </>
                                }
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default CurrentAnswers