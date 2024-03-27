import React from "react";
import style from "./style.module.scss";

import NewsContainer from "../../widgets/newsContainer";
import { Layout } from "../../app/layout";
const NewsPage = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <h1>NEWS</h1>
        <div className={style.mainContainer}>
          <NewsContainer />
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
