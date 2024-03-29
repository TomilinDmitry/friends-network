import React from "react";
import style from "./index.module.scss";
import { NavMainPageDesktop } from "../../shared/navigationMainPageDesktop";
import { NavMainPageMedia } from "../../shared/navigationMainPageMedia";

export const NavigationMainPage = () => {
  return (
    <div className={style.container}>
      <div className={style.desktopStyle}>
        <NavMainPageDesktop />
      </div>
      <div className={style.media}>
        <NavMainPageMedia />
      </div>
    </div>
  );
};
