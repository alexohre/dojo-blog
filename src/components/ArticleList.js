import React from "react";
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="article-preview" key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>Written by {article.author} </p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
