import React from "react";

function ArticleList({ articles }) {
  // const articles = props.articles;

  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="article-preview" key={article.id}>
          <h3>{article.title}</h3>
          <p>Written by {article.author} </p>
          {/* <button onClick={() => handleDelete(article.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
