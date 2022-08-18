import Link from "next/link"
import Logo from "../components/Logo";
import style from "../styles/home.module.scss"

const Home = () => {

  return (
    <div className={style.pageContainer}>
      <div className={style.contentContainer}>
        <Logo />
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
