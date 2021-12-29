import { Movie } from "./Movie";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

export function Movielist() {
  const [movielist, setmovies] = useState([]);
  const getmovielist = () => {
    fetch("https://61c412fdf1af4a0017d99285.mockapi.io/Movies/", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setmovies(mvs));
  };
  useEffect(getmovielist, []);
  const deletemovie = (id) => {
    fetch(`https://61c412fdf1af4a0017d99285.mockapi.io/Movies/${id}`, {
      method: "Delete",
    }).then((data) => data.json()).then(()=>getmovielist());
  };

  return (
    <div>
      {movielist.map(
        (
          { name, poster, rating, summary, id },
          index //map can take second argument represents index value
        ) => (
          <Movie
            deletebutton={
              <Button
                color="warning"
                variant="text"
                onClick={() => deletemovie(id)}
              >
                <DeleteIcon />
              </Button>
            }
            id={id}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        )
      )}
    </div>
  );
}
