import React from "react";
import Nav from "../shared/Nav";
import { useParams } from "react-router-dom";

function ArticlesDetails() {
  const { id } = useParams();
  return (
    <div className="content">
      <Nav />
      <div className="create-article">
        <h3>Articles Details - {id}</h3>
      </div>
    </div>
  );
}

export default ArticlesDetails;
