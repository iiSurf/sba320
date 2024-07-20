// Points are awarded based on time within the interactive session?
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function HomePage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get() // TODO: url
            .then(response => setArticles(response.data.articles))
            .catch(error => console.error('Error fetching news articles: ', error));
    }, []);

    return (
        <>
            <h1>Top News</h1>
            <ul>
                
            </ul>
        </>
    )
}

export default HomePage;