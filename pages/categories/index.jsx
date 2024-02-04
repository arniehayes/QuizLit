import Link from "next/link";
import style from "../../styles/pageStyles/categories.module.scss";
import Image from "next/image";
import Logo from "../../components/Logo";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AddressContext } from "../_app.jsx";
import cc from "classcat";

const Category = () => {
  const categoryList = [
    {
      label: "Arts & Literature",
      link: "arts_and_literature",
      path: "/painting-art-svgrepo-com.svg",
    },
    {
      label: "Film & TV",
      link: "film_and_tv",
      path: "/film-strip-svgrepo-com.svg",
    },
    {
      label: "Food & Drink",
      link: "food_and_drink",
      path: "/fast-food-svgrepo-com.svg",
    },
    {
      label: "General Knowledge",
      link: "general_knowledge",
      path: "/book-svgrepo-com.svg",
    },
    {
      label: "Geography",
      link: "geography",
      path: "/americasglobe-svgrepo-com.svg",
    },
    {
      label: "History",
      link: "history",
      path: "/history-svgrepo-com.svg",
    },
    {
      label: "Music",
      link: "music",
      path: "/music-svgrepo-com.svg",
    },
    {
      label: "Science",
      link: "science",
      path: "/science-svgrepo-com.svg",
    },
    {
      label: "Society & Culture",
      link: "society_and_culture",
      path: "/group-svgrepo-com.svg",
    },
    {
      label: "Sport & Leisure",
      link: "sport_and_leisure",
      path: "/tennis-svgrepo-com.svg",
    },
  ];

  const { difficulty, setDifficulty } = useContext(AddressContext);
  const [chosen, setChosen] = useState();
  const [color, setColor] = useState();

  const chooseDifficulty = (diff) => {
    if (diff == "Easy") {
      setDifficulty("Easy");
      setChosen(true);
    } else if (diff == "Medium") {
      setDifficulty("Medium");
      setChosen(true);
    } else if (diff == "Hard") {
      setDifficulty("Hard");
      setChosen(true);
    }
  };

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
            Categories
          </motion.h1>
        </div>
        <div className={style.difficultyContainer}>
          <motion.h2
            className={style.difficultyTitle}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Choose difficulty
          </motion.h2>
          <div className={style.categoryContainer}>
            <motion.button
              onClick={() => {chooseDifficulty("Easy"), setColor("green")}}
              className={cc([style.anchor, style.button, style.green, {
                [style.greenSelected]: chosen === true && color == "green"
              }])}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.04 }}
              viewport={{ once: true }}
            >
              Easy
            </motion.button>
            <motion.button
              onClick={() => {chooseDifficulty("Medium"), setColor("orange")}}
              className={cc([style.anchor, style.button, style.orange, {
                [style.orangeSelected]: chosen === true && color == "orange"
              }])}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.04 }}
              viewport={{ once: true }}
            >
              Medium
            </motion.button>
            <motion.button
              onClick={() => {chooseDifficulty("Hard"), setColor("red")}}
              className={cc([style.anchor, style.button, style.red, {
                [style.redSelected]: chosen === true && color == "red"
              }])}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.04 }}
              viewport={{ once: true }}
            >
              Hard
            </motion.button>
          </div>
        </div>
        <div className={style.categoryContainer}>
          {categoryList.map((category) => (
            <Link key={category.link} href={`/categories/${category.link}`}>
              <motion.a
                className={style.anchor}
                id={category.link}
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.04 }}
                viewport={{ once: true }}
              >
                <Image src={category.path} width={60} height={60} />
                {category.label}
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
