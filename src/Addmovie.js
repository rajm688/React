import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Addmovie({ movielist }) {
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const history = useHistory();
  return (
    <div className="form">
      <TextField
        onChange={(event) => setname(event.target.value)}
        id="standard-basic"
        label="Enter the Movie name"
        variant="standard" />

      <TextField
        onChange={(event) => setposter(event.target.value)}
        id="standard-basic"
        label="Enter the Movie Poster"
        variant="standard" />

      <TextField
        onChange={(event) => setrating(event.target.value)}
        id="standard-basic"
        label="Enter the Movie Rating"
        variant="standard" />

      <TextField
        onChange={(event) => setsummary(event.target.value)}
        id="standard-basic"
        label="Enter the Movie Details"
        variant="standard" />

      <Button
        className="submit"
        onClick={ () => {
            const newmovie = {
              name,
              poster,
              rating,
              summary,
            };
            // console.log(newmovie)
            fetch("https://61c412fdf1af4a0017d99285.mockapi.io/Movies", {
              method: "POST",
              body: JSON.stringify(newmovie),
              headers: { "Content-Type": "application/json", },
            })
              .then((data) => data.json())
              .then(() => history.push("/movies"));
          }}
        variant="contained"
      >
        Add movie
      </Button>
    </div>
  );
}
