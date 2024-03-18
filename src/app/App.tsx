import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "../widgets/navBar";

import style from "./App.module.scss";
import NewsPage from "../pages/NewsPage";
import NewsDetails from "../pages/NewsDetails";

function App() {
  return (
    <div className={style.app}>
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/news/:id' element={<NewsDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
