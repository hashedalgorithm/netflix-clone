import React, { useState, useEffect } from "react";
import WithProtectedRoute from "./WithProtectedRoute";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { useMyDispatch } from "./UseStateAndDispatch";

import "./Content.css";
import ScrollComponent from "./Components/ScrollComponent";

function Content() {

  const API_KEY = "4f2d540fb28b05b52c0443b24ff06b73";
  const URL = "http://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const suffixes = [
    {
      topic: "Trending",
      url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    {
      topic: "Originals",
      url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
      topic: "Top Rated",
      url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
      topic: "Action Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
      topic: "Comedy Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
      topic: "Horror Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
      topic: "Romance Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
      topic: "Documenatary",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="Content_s1">
        <img
          src={`${IMG_URL}/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg`}
          alt=""
          className="Content_s1img"
          width="100%"
        />
        <div className="Content_s1_btns">
          <h1 style={{color: "white"}}>Mortal Kombat</h1>
          <button className="C_s1_playbtn">
            <i className="fas fa-play"></i> Play
          </button>
          <button className="C_s1_infobtn">
            <i className="fas fa-info-circle"></i> More Info
          </button>
        </div>
      </div>
      <div className="Content_s2">
        {suffixes.map((item) => {
          return (
            <ScrollComponent title={item.topic} fullurl={`${URL}${item.url}`} />
          );
        })}
      </div>
    </div>
  );
}

export default WithProtectedRoute(Content);

// {`${IMG_URL}${data[0].backdrop_path}`}
