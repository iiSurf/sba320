import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./components/NavBar";
import "./styles/App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        // Defines a route and when the path is matched to '/', there will be a component re render.
        <Route path="/" element={<HomePage />} />

        // Defines another route and when the path is matched to '/article/:id', there will be a component re render.
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
