import React, { ChangeEvent, useState } from "react";
import style from "./style.module.scss";
import {
  useDispatch,
  useSelector,
} from "../../app/services/hooks/hooks";
import { setQueryValue } from "../../app/services/slice/inputSlice";
// инпут поиска новостей

const SearchNews = () => {
  const { query } = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    dispatch(setQueryValue(value));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <input
          type='search'
          placeholder='Введите заголовок....'
          className={style.searchInput}
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchNews;
