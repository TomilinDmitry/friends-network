import React from "react";
import { useQuery } from "react-query";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import News from "../../entities/News";
import SearchNews from "../../features/searchNews";
import style from "./style.module.scss";
import { Post, fetchPosts } from "../../app/utils/api";
import { useSelector } from "../../app/services/hooks/hooks";

const NewsContainer = () => {
  const { query } = useSelector((state) => state.query);
  const { data, isLoading, isError } = useQuery<Post[]>(
    "posts",
    fetchPosts,
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error fetching data</div>;
  const filteredData = data.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className={style.wrapper}>
      <SearchNews />
      {filteredData.length > 0 ? (
        <div className={style.container}>
          <AutoSizer>
            {({
              height,
              width,
            }: {
              height: number;
              width: number;
            }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={filteredData.length}
                itemSize={350}
                itemData={filteredData}>
                {({
                  index,
                  style,
                }: {
                  index: number;
                  style: React.CSSProperties;
                }) => (
                  <div style={style}>
                    <News
                      title={filteredData[index].title}
                      body={filteredData[index].body}
                      number={filteredData[index].id}
                    />
                  </div>
                )}
              </FixedSizeList>
            )}
          </AutoSizer>
        </div>
      ) : (
        <h1>Ни одного элемента не найдено...</h1>
      )}
    </div>
  );
};

export default NewsContainer;
