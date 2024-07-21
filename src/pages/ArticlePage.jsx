import React from "react";
import { useLocation } from "react-router-dom";

// useLocation accesses the current url location. Basically allows access to the article object that was passed as state when navigating this route. Also defaults to an empty object to avoid errors.
function ArticlePage() {
  const location = useLocation();
  const { article } = location.state || {};

  return (
    <div>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>

          // rel=noopener noreferrer is good security practice apparently to use to help prevent potential security threats. When the new page is opened in another tab then this new page will not manipulate the original page.
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
