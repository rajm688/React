import * as React from 'react';
import "./App.css";
import { useState } from "react";
import { Counter } from "./Counter";
import { Movielist } from "./Movielist";
import { Switch, Route, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Color } from './Color';
export default function App() {
  const intmovies = [
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. "
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
        Assemble in the United Kingdom and Ireland), or simply The Avengers, is
        a 2012 American superhero film based on the Marvel Comics superhero team
        of the same name.`,
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA
    pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
    of researchers, to find a new planet for humans.`
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`
    },

    {
      name: 96,
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`
    },
    {
      name: "Dark Knight",
      poster:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      rating: 9,
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      name: "King Kong",
      poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating: 9,
      summary:
        "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. "
    }
  ];
  const [movielist, setmovielist] = useState(intmovies);
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  return (
    <div className="App">
      <nav>
      <Link to="/home">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/Add-Movie"> Add movie</Link>
      <Link to="/color-game">color Game</Link>
      </nav>
      <Switch>
      <Route path="/home">
      <Home/>
      </Route>
      <Route path="/Add-Movie">
      <div className="form"> 
        <TextField  onChange={(event) => setname(event.target.value)}
           id="standard-basic" label="Enter the Movie name" variant="standard" />
    
        <TextField onChange={(event) => setposter(event.target.value)}
           id="standard-basic" label="Enter the Movie Poster" variant="standard" />
   
        <TextField  onChange={(event) => setrating(event.target.value)}
           id="standard-basic" label="Enter the Movie Rating" variant="standard" />
  
        <TextField  onChange={(event) => setsummary(event.target.value)}
           id="standard-basic" label="Enter the Movie Details" variant="standard" />
        
        <Button className="submit" onClick={() => {
            const newmovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary
            };
            // console.log(newmovie)
            setmovielist([...movielist, newmovie]);
          }} variant="contained">Add movie</Button>
      </div>
      </Route>
      <Route path="/movies">
      <div className="hello">
      <Movielist movies={movielist} setmovielist={setmovielist} />
    </div>
    </Route>
    <Route path="/color-game">
      <Color/>
    </Route>
    </Switch>
    </div>
  );
}
export function Movie({ deletebutton,name, poster, rating, summary }) {
  //conditional styling
  const styles = { color: rating > 8 ? "green" : "red" };
  const [show, setshow] = useState(true);
  // const displays = {display: show ? "block" : "none"};
  return (
    <div className="main">
      <img className="image" src={poster} alt="img" />
      <div className="sub">
        <h3>{name}</h3>
        <p style={styles}><StarIcon/>{rating}</p>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => setshow(!show)}>
          {show ?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}
        </button>
        <Counter />
      {deletebutton}
      </div>

      {/* conditional styling */}
      {/* <p style={displays} className="content">{details}</p> */}
      {/* Conditional rendering */}
      {show ? <p className="content">{summary}</p> : ""}
    </div>
  );
}

function Home(){
  return(
    <h1>🎉Welocme to my react Page🎉</h1>
  )
}