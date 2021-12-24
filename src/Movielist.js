import { Movie } from "./Movie";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
export function Movielist({ movies, setmovielist }) {
  const deletemovie = (id) => {
    fetch(`https://61c412fdf1af4a0017d99285.mockapi.io/Movies/${id}`, {
      method: "Delete",
    }).then((data) => data.json());
  };

  return (
    <div>
      {movies.map(
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
            id={index}
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
