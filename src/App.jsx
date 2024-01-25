import { useState } from "react";
import "./App.css";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import { Header } from "./components/Header";
import {ArticlesContainer} from "./components/ArticlesContainer";

function App() {
  return (
    <>
      <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20" >
        <Header/>
      <div className="lg:flex md:gap-8">
  
        <MainArticle />
        <NewContainer />
      </div>
        <ArticlesContainer/>
      </main>
    </>
  );
}

export default App;
