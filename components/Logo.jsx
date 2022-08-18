import Link from "next/link";
import style from "../styles/componentStyles/logo.module.scss";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
        <Link href={`/`}>
            <a className={style.anchor}>
                <img src="/brain.png" className={style.logo} width="55px" height= "55px" />
            </a>
        </Link>
    </div>
  )
}

export default Logo