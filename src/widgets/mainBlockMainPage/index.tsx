import React from "react";
import style from "./index.module.scss";
import { DescriptionSlider } from "../../features/descriptionSlider";
import { motion } from "framer-motion";

export const MainBlock = () => {
  return (
    <main className={style.main}>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
          delay: 1.2,
        }}
        className={style.lastNews}>
        Welcome to the social network for friends
      </motion.p>
      <div className={style.infoBlock}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "backIn",
            duration: 0.4,
            delay: 1.2,
          }}
          className={style.title}>
          <span>Friends </span>
          are
        </motion.p>
        <DescriptionSlider />
      </div>
    </main>
  );
};
