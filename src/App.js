import * as React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Movielist } from "./Movielist";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Color } from "./Color";
import { Home } from "./Home";
import { Notfound } from "./Notfound";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MovieDetails } from "./MovieDetails";
import { TicTakToe } from "./TicTakToe";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

import Paper from "@mui/material/Paper";
import { Form } from "./Form";
import { Addmovie } from "./Addmovie";
export default function App() {
  // const intmovies = [
  //   {
  //     id:100,
  //     name: "RRR",
  //     poster:
  //       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //     rating: 8.8,
  //     summary:
  //       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  //   },
  //   {
  //     id:102,
  //     name: "Iron man 2",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //     rating: 7,
  //     summary:
  //       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //     trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  //   },
  //   {
  //     id:103,
  //     name: "No Country for Old Men",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //     rating: 8.1,
  //     summary:
  //       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //     trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  //   },
  //   {
  //     id:104,
  //     name: "Jai Bhim",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //     summary:
  //       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //     rating: 8.8,
  //     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  //   },
  //   {
  //     id:105,
  //     name: "The Avengers",
  //     rating: 8,
  //     summary:
  //       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //     poster:
  //       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  //   },
  //   {
  //     id:106,
  //     name: "Interstellar",
  //     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //     rating: 8.6,
  //     summary:
  //       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  //   },
  //   {
  //     id:107,
  //     name: "Baahubali",
  //     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //     rating: 8,
  //     summary:
  //       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  //   },
  //   {id:108,
  //     name: "Ratatouille",
  //     poster:
  //       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //     rating: 8,
  //     summary:
  //       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  //   }
  // ];
  const [movielist, setmovielist] = useState([]);
  const history = useHistory();
  
  const [currenttheme, settheme] = useState("light");
  useEffect(
    () =>
      fetch("https://61c412fdf1af4a0017d99285.mockapi.io/Movies")
        .then((data) => data.json())
        .then((movies) => setmovielist(movies)),
    []
  );

  const theme = createTheme({
    palette: {
      mode: currenttheme,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/Add-Movie")}
              >
                Add Movie
              </Button>
              <Button color="inherit" onClick={() => history.push("/flims")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/color-game")}
              >
                Color Game
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/Tictaktoe")}
              >
                Tic Tac Toe
              </Button>
              <Button color="inherit" onClick={() => history.push("/Form")}>
                Form
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() =>
                  settheme(currenttheme === "light" ? "dark" : "light")
                }
              >
                {currenttheme === "light" ? (
                  <NightsStayIcon />
                ) : (
                  <LightModeIcon />
                )}
                {currenttheme === "light" ? "Drak Mode" : "Light Mode"}
              </Button>
            </Toolbar>
          </AppBar>
          {/* <nav> */}
          {/* <Link  id='link' to="/">Home</Link>  will be matched by substring and order matters */}
          {/* <Link id='link' to="/Add-Movie"> Add movie</Link> */}
          {/* <Link id='link' to="/flims">Movies</Link> */}
          {/* <Link id='link' to="/color-game">color Game</Link> */}
          {/* </nav> */}
          <Switch>
            {/* exact will solve the issue in matching with substring */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails movies={movielist} />
            </Route>
            <Route path="/Add-Movie">
              <Addmovie setmovielist={setmovielist} />
            </Route>
            <Route path="/flims">
              {/* redirect is used to change the file path from flims to movie */}
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies">
              <div className="hello">
                <Movielist movies={movielist} movielist={movielist} />
              </div>
            </Route>
            <Route path="/color-game">
              <Color />
            </Route>
            <Route path="/Tictaktoe">
              <TicTakToe />
            </Route>
            <Route path="/Form">
              <Form />
            </Route>
            <Route path="**">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export function GameBox({ val, onplayerclick }) {
  const styles = { color: val === "X" ? "black" : "red" };
  return (
    <div onClick={() => onplayerclick()} style={styles} className="gameBox">
      {val}
    </div>
  );
}


