import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewsCard from '../components/NewsCard';
import axios from "axios";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_URI;
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.error("Error fetching news articles: ", error));
  }, []);

  const handleArticleClick = (index, article) => {
    navigate(`/article/${index}`, { state: { article } });
  };

  return (
    <>
      <h1>Today's News</h1>
        {articles.map((article, index) => (
          <li key={index} onClick={() => handleArticleClick(index, article)}>
            {article.title}
          </li>
        ))}
    </>
  );
}

export default HomePage;
