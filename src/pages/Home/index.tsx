import React from "react";
import style from "./style.module.scss";
import NewsContainer from "../../widgets/newsContainer";
const Home = () => {
  return (
    <div className={style.wrapper}>
      <h1>NEWS</h1>
      <div className={style.mainContainer}>
        <NewsContainer />
      </div>
    </div>
  );
};

export default Home;
