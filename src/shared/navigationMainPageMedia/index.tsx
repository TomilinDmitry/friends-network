import React, { useState } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "../Logo";
import burgerMenu from "../../app/assets/icons/burgerMenu.svg";
import close from "../../app/assets/icons/close.svg";
export const NavMainPageMedia = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={style.container}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
          delay: 1,
        }}>
        <Logo />
      </motion.div>
      <div className={style.navigationBlock}>
        <div className={style.burgerMenu}>
          {open ? (
            <img src={close} alt='close' onClick={handleClick} />
          ) : (
            <img
              src={burgerMenu}
              alt='burgerMenu'
              onClick={handleClick}
            />
          )}
        </div>
        {open ? (
          <motion.ul className={style.navigationList}>
            <Link to='/home'>
              <motion.li
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.4,
                  delay: 0.4,
                }}>
                Home
              </motion.li>
            </Link>
            <Link to='/news'>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.4,
                  delay: 0.8,
                }}>
                News
              </motion.li>
            </Link>
            <Link to='/friends'>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.4,
                  delay: 1.2,
                }}>
                Friends
              </motion.li>
            </Link>
            <Link to='/home'>
              <motion.li
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.4,
                  delay: 0.4,
                }}>
                Updates
              </motion.li>
            </Link>
            <Link to='/news'>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.4,
                  delay: 0.8,
                }}>
                Blog
              </motion.li>
            </Link>
            <Link to='/friends'>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.4,
                  delay: 1.2,
                }}>
                About
              </motion.li>
            </Link>
          </motion.ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
