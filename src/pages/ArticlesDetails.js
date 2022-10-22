import React from "react";
import Nav from "../shared/Nav";
import { useParams, useNavigate } from "react-router-dom";
import data_fetch from "../useFetch";

function ArticlesDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: article,
    error,
    isLoading,
  } = data_fetch("http://localhost:3002/articles/" + id);

  const handleDelete = () => {
    fetch("http://localhost:3002/articles/" + article.id, {
      method: "DELETE",
    }).then(() => {
      console.log("article deleted successfully");
      navigate("/");
    });
  };

  return (
    <div className="content">
      <Nav />
      <div className="article-details">
        {isLoading && <div>Loading...</div>}
        {error && <div> {error} </div>}
        {article && (
          <article>
            <h2>{article.title}</h2>
            <p style={{ marginBottom: "10px" }}>
              Written by{" "}
              <span style={{ fontWeight: "bold" }}>{article.author}</span>
            </p>
            <p>{article.content}</p>
            <button style={{ marginTop: "13px" }} onClick={handleDelete}>
              Delte article
            </button>
          </article>
        )}
      </div>
    </div>
  );
}

export default ArticlesDetails;
