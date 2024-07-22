import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewsCard.css";
import placeholder from '../assets/placeholder.jpg';

//  An article object represents an individual news article.
//  Index of the article in the list.
function NewsCard({ article, index }) {

  // Allows you to navigate to different routes.
  const navigate = useNavigate();

  // Called only when a news card is clicked. The id is dynamically placed in to the route using a template literal. Then passes the article object with the navigation.
  const handleClick = () => {
    navigate(`/article/${index}`, { state: { article } });
  };

  return (
    // Adding CSS and making card clickable
    <div className="newsCard" onClick={handleClick}>
      <img
      // Use article image, if no image is provided by article then use placeholder image downloaded from pexels. I guess i could have used my own photo. Next time.
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
