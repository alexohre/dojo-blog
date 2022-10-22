import React, { useState } from "react";
import Nav from "../shared/Nav";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Jenet C.");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = { title, content, author };
    setIsLoading(true);

    fetch("http://localhost:3002/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    }).then(() => {
      console.log("New article added");
      navigate("/");
    });

    setIsLoading(false);
  };

  return (
    <div className="content">
      <Nav />
      <div className="create">
        <h1 style={{ marginBottom: "20px" }}>Create a new article </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Title: <span>{title}</span>
          </label>

          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>
            Content: <span>{content}</span>
          </label>
          <textarea
            name=""
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <label>
            Author: <span>{author}</span>
          </label>
          <select
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Emily T.">Emily T.</option>
            <option value="Mary K.">Mary K.</option>
            <option value="Jenet C.">Jenet C.</option>
          </select>
          {!isLoading && <button>Create Article</button>}
          {isLoading && <button disabled>Creating Article... </button>}
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;
