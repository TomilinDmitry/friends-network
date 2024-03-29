import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

import style from "./styles/App.module.scss";
import NewsPage from "../pages/NewsPage";
import NewsDetails from "../pages/NewsDetails";
import { MainPage } from "../pages/MainPage";
function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
