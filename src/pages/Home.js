import React from "react";
import ArticleList from "../components/ArticleList";
import data_fetch from "../useFetch";

function Home() {
  const {
    data: articles,
    error,
    isLoading,
  } = data_fetch("http://localhost:3002/articles");
  // const handleDelete = (id) => {
  //   const newArticles = articles.filter((article) => article.id !== id);
  //   setArticles(newArticles);
  // };

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div>Loading...</div>}
      {articles && <ArticleList articles={articles} />}
    </div>
  );
}

export default Home;
