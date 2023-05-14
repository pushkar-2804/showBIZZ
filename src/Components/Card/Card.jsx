import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export let showMovieData;

const Card = (props) => {
  const movieData = props.data.show;
  const nav = useNavigate();
  const viewMore = () => {
    showMovieData = props.data;
    nav("/viewMore");
  };

  return (
    <div className="movieCard">
      <div className="wrap--movieImage">
        <img src={movieData.image.medium} alt="movie" className="movieImage" />
      </div>
      <div className="movieDesc">
        <div className="cardHead">
          <div className="movieWord">Movie</div>
          <div className="movieName">{movieData.name}</div>
          <div className="movieGenre">{movieData.genres.join(",")}</div>
        </div>
        <button onClick={viewMore}>View</button>
      </div>
    </div>
  );
};

export default Card;
