import React from "react";
import { useLocation } from "react-router-dom";

function ArticlePage() {
  const location = useLocation();
  const { article } = location.state || {};

  return (
    <div>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More Here
          </a>
        </>
      ) : (
        <p>Article Not Found</p>
      )}
    </div>
  );
}

export default ArticlePage;
