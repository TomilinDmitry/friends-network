"use client";
import React from "react";
import style from "./style.module.scss";

import { Navigation } from "../../shared/navigation";
import { Link } from "react-router-dom";
import Profile from "../../features/profile";
import logout from "../../app/assets/icons/logout.svg";
import {
  useDispatch,
  useSelector,
} from "../../app/services/hooks/hooks";
import {
  CloseNavigation,
  openNavigation,
} from "../../app/services/slice/hoverSlice";
const NavBar = () => {
  const dispatch = useDispatch();
  const { isHover } = useSelector((state) => state.isHover);
  const handleMouseEnter = () => {
    dispatch(openNavigation());
  };
  // Реализовал так,потому что если просто менять состояния через "!" , багается и состояния сбивается
  const handleMouseLeave = () => {
    dispatch(CloseNavigation());
  };
  const imageStyle = {
    maxWidth: isHover ? 70 : 50,
    maxHeight: isHover ? 70 : 50,
    transition: "0.5s ease",
  };
  return (
    <div
      className={style.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={style.container}>
        <Link to='/profile'>
          <Profile imageStyle={imageStyle} />
        </Link>
        <div>
          <Navigation />
        </div>
      </div>
      <div className={style.logoutBlock}>
        <img src={logout} alt='news' width={34} height={34} />
        {isHover && <span className={style.logout}>Logout</span>}
      </div>
    </div>
  );
};

export default NavBar;
