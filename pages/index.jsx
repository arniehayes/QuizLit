import Link from "next/link";
import Logo from "../components/Logo";
import style from "../styles/home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className={style.pageContainer}>
      <div className={style.contentContainer}>
        <Logo />
        <div className={style.titleContainer}>
          <motion.h1
            className={style.title}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            QUIZLIT
          </motion.h1>
        </div>
        <div className={style.anchorContainer}>
          <Link href="/categories">
            <motion.a 
            className={style.anchor}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            >
                Start New Game
              </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
