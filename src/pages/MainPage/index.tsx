import React from "react";
import style from "./index.module.scss";
import { NavigationMainPage } from "../../widgets/navigatonMainPage";
import { MainBlock } from "../../widgets/mainBlockMainPage";
export const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <header className={style.header}>
          <NavigationMainPage />
        </header>
        <MainBlock />
      </div>
    </div>
  );
};
