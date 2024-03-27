import React, { useState } from "react";
import style from "./index.module.scss";
import left from "../../app/assets/icons/arrowLeftWhite.svg";
import right from "../../app/assets/icons/arrowRightWhite.svg";
import { mockData } from "./lib/data";
import { motion } from "framer-motion";
export const DescriptionSlider = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? mockData.length - 1 : prevSlide - 1,
    );
  };

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === mockData.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <motion.p
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.4,
        delay: 1.5,
      }}
      className={style.description}>
      <img src={left} alt='left' onClick={prevSlide} />
      <ul className={style.descriptionList}>
        {mockData.map((el, index) => (
          <li
            key={el.id}
            className={
              index === slide ? style.active : style.notActive
            }
            onClick={() => setSlide(index)}>
            <span className={style.title}>{el.title}</span>
            {el.text}
          </li>
        ))}
      </ul>
      <img src={right} alt='right' onClick={nextSlide} />
    </motion.p>
  );
};
