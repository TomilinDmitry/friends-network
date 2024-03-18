import React from "react";
import style from "./style.module.scss";
import photo from "../../app/images/newsPhoto.svg";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import { Link } from "react-router-dom";
// 1 новость
export type TPropsNews = {
  title: string;
  body: string;
  number: number;
};
const News = ({ title, body, number }: TPropsNews) => {
  const { isHover } = useSelector(
    (state: RootState) => state.isHover,
  );
  return (
    <div className={style.wrapper}>
      <Link to={`/news/${number}`}>
        <div
          className={`${
            isHover ? style.navigationIsClose : style.newsItem
          }`}>
          <div className={`${style.newsContent}`}>
            <div className={style.postNumber}>#{number}</div>
            <div className={style.newsImage}>
              <img src={photo} alt={photo} />
            </div>
            <div className={style.textBlock}>
              <h3 className={style.newsTitle}>{title}</h3>
              <p className={style.description}>{body}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default News;
