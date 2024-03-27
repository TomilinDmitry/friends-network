import React, { ReactNode } from "react";
import NavBar from "../widgets/navBar";
import style from "./styles/layout.module.scss";
export type TChildren = {
  children: ReactNode;
};
export const Layout = ({ children }: TChildren) => {
  return (
    <div className={style.wrapper}>
      <div>
        <NavBar />
      </div>
      <div className={style.container}>{children}</div>
    </div>
  );
};
