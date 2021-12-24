import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  return (
    <div className="iframeContainer">
      <iframe
        title={movie.name}
        className="iframe"
        src={movie.trailer}
      ></iframe>
      <h3>{movie.name}</h3>
      <p>
        <StarIcon />
        {movie.rating}
      </p>
      <p className="content">{movie.summary}</p>
      <div className="navi">
        <Button
          style={{ width: "20%" }}
          className="forward"
          onClick={() => history.goBack()}
          variant="outlined"
        >
          <ArrowBackIosIcon />
          Back
        </Button>
        <Button
          style={{ width: "20%" }}
          className="backward"
          onClick={() => history.goForward()}
          variant="outlined"
        >
          Forward
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
}
