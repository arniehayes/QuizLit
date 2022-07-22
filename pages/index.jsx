import Link from "next/link"
import style from "../styles/home.module.scss"
import cc from "classcat";

const Home = () => {

  return (
    <div className={style.pageContainer}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>QUIZLIT</h1>
        </div>
        <div className={style.anchorContainer}>
          <Link href="/categories">
            <a className={style.anchor}>
              Start New Game
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home
