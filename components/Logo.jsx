import Link from "next/link";
import style from "../styles/componentStyles/logo.module.scss";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
        <Link href={`/`}>
            <motion.a 
            className={style.anchor}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            >
                <img src="/brain.png" className={style.logo} width="55px" height= "55px" />
            </motion.a>
        </Link>
    </div>
  )
}

export default Logo