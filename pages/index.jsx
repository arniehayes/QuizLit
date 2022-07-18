import Link from "next/link"
import style from "../styles/home.module.scss"
import cc from "classcat";

const Home = () => {

  return (
    <div className={cc([style.pageContainer])}>
      <div className={cc([style.contentContainer])}>
        <div className={cc([style.titleContainer])}>
          <h1 className={cc([style.title])}>QUIZLIT</h1>
        </div>
        <div className={cc([style.anchorContainer])}>
          <Link href="/categories">
            <a className={cc([style.anchor])}>
              Start New Game!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home
