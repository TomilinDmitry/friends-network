import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import home from "../../app/icons/home.svg";
import friends from "../../app/icons/friends.svg";
import news from "../../app/icons/newspaper.svg";
import { useSelector } from "../../app/services/hooks/hooks";

export const Navigation = () => {
  const { isHover } = useSelector((state) => state.isHover);
  const iconStyle = {
    maxWidth: isHover ? 70 : 70,
    height: isHover ? 70 : 45,
    transition: "0.5s ease",
  };
  return (
    <div>
      {isHover ? (
        <ul className={style.isHoveredList}>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/friends'>
            <li>Friends</li>
          </Link>
          <Link to='/news'>
            <li>News</li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
        </ul>
      ) : (
        <ul className={style.isHoveredList}>
          <li>
            <img
              src={home}
              alt='home'
              width={34}
              height={34}
              style={iconStyle}
            />
          </li>
          <li>
            {" "}
            <img
              src={friends}
              alt='friends'
              width={34}
              height={34}
              style={iconStyle}
            />
          </li>
          <li>
            {" "}
            <img
              src={news}
              alt='news'
              width={34}
              height={34}
              style={iconStyle}
            />
          </li>
          <li>
            {" "}
            <img
              src={news}
              alt='news'
              width={34}
              height={34}
              style={iconStyle}
            />
          </li>
        </ul>
      )}
    </div>
  );
};
