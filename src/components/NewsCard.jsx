import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewsCard.css";
import placeholder from '../assets/placeholder.jpg';

function NewsCard({ article, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${index}`, { state: { article } });
  };

  return (
    <div className="newsCard" onClick={handleClick}>
      <img
        src={article.urlToImage || placeholder}
        alt={article.title}
        className="newsCardImage"
      />
      <div className="newsCardContent">
        <h2 className="newsCardTitle">{article.title}</h2>
        <p className="newsCardInfo">{article.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
