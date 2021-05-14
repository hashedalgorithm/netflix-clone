import React from "react";
import { Link } from "react-router-dom";
import "./TitleCard.css";
type Titlecardprops = {
  imgurl: string;
};
function TitleCard({ imgurl }: Titlecardprops) {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="TitleCard">
      <Link to="/home">
        <img
          className="Titlecardimg"
          src={`${IMG_URL}${imgurl}`}
          alt="Movie Img"
          width="150px"
        />
      </Link>
    </div>
  );
}

export default TitleCard;
