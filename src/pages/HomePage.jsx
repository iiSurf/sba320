import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import '../styles/HomePage.css';

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_URI = import.meta.env.VITE_API_URI;
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_URI}`)
      .then((response) => {
        setArticles(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news articles:', error);
      });
  }, []);

  return (
    <>
      <h1>Extra! Extra! Read All About It! This is Today's News</h1>
      <div className="newsContainer">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} index={index} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
