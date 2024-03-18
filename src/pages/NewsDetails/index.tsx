import React from "react";
import style from "./style.module.scss";
import photo from "../../app/images/newsPhoto.svg";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useQuery } from "react-query";
import { Post, fetchPosts } from "../../app/utils/api";
const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery<Post[]>(
    "posts",
    fetchPosts,
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error fetching data</div>;

  const postId = parseInt(id!);

  const postData = data.find((post) => post.id === postId);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.buttonBack}>
          <button onClick={handleGoBack}>Back</button>
        </div>
        <h1>News Details #{id}</h1>
        <div className={style.block}>
          <div className={style.newsImage}>
            <img src={photo} alt={photo} />
          </div>
          <div className={style.textBlock}>
            <h3 className={style.newsTitle}>
              {postData?.title.toUpperCase()}
            </h3>
            <p className={style.description}>
              {postData?.body}
              {postData?.body}
              {postData?.body}
              {postData?.body}
              {postData?.body}
              {postData?.body}
              {postData?.body}
              {postData?.body}
              {postData?.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
