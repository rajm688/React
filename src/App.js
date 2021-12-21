import * as React from 'react';
import "./App.css";
import { useState } from "react";
import { Counter } from "./Counter";
import { Movielist } from "./Movielist";
import { Switch, Route, Redirect,useHistory,useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Color } from './Color';
import { Home } from './Home';
import { Notfound } from './Notfound';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export default function App() {
  const intmovies = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];
  const [movielist, setmovielist] = useState(intmovies);
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const history = useHistory();  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Button color='inherit' onClick={()=>history.push("/")}>Home</Button>
        <Button color='inherit'onClick={()=>history.push("/Add-Movie")}>Add Movie</Button>
        <Button color='inherit' onClick={()=>history.push("/flims")}>Movies</Button>
        <Button color='inherit' onClick={()=>history.push("/color-game")}>Color Game</Button>
        <Button color='inherit' onClick={()=>history.push("/Tictaktoe")}>Tic Tac Toe</Button>

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
      <Home/>
      </Route>
      <Route path="/movies/:id">
        <MovieDetails movies={movielist}/>
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
      history.push("/movies")
          }} variant="contained">Add movie</Button>
      </div>
      </Route>
      <Route path="/flims">
      {/* redirect is used to change the file path from flims to movie */}
        <Redirect to="/movies"/> 
      </Route>
      <Route path="/movies">
      <div className="hello">
      <Movielist movies={movielist} setmovielist={setmovielist} />
    </div>
    </Route>
    <Route path="/color-game">
      <Color/>
    </Route>
    <Route path="/Tictaktoe"><TicTakToe/></Route>
    <Route path="**">
      <Notfound/>
    </Route>
    </Switch>
    </div>
  );
}
export function Movie({ deletebutton,name, poster, rating, summary,id }) {
  //conditional styling
  const styles = { color: rating > 8 ? "green" : "red" };
  const [show, setshow] = useState(true);
  const history = useHistory();
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
        <IconButton color="info" onClick={()=>history.push(`/movies/${id}`)}><InfoIcon/></IconButton>
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

function MovieDetails({movies}){
  const {id} = useParams();
  const movie = movies[id];
  const history = useHistory();
  return (
         <div className='iframeContainer'>
        <iframe title={movie.name} className='iframe' src={movie.trailer}></iframe>  
        <h3>{movie.name}</h3>
        <p><StarIcon/>{movie.rating}</p>
      <p className="content">{movie.summary}</p>
      <div className='navi'>
      <Button style={{width:"20%"}} className='forward' onClick={()=>history.goBack()} variant="outlined"><ArrowBackIosIcon/>Back</Button>
      <Button style={{width:"20%"}} className='backward' onClick={()=>history.goForward()} variant="outlined">Forward<ArrowForwardIosIcon/></Button>
      </div>
    </div>
  )};

  function TicTakToe(){
    const [board , setboard] = useState([null,null,null,null,null,null,null,null,null])
    const [isXturn, setisXturn] = useState(true)
    const handleclick = (index) => { console.log("Clicked", index);
    if(!winneris && !board[index]){
    const boardcopy = [...board];
    boardcopy[index]= isXturn ? "X" : "O";
    setboard(boardcopy)
    setisXturn(! isXturn)}}

    const winner = (board)=>{
      const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
      for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        if(board[a]!==null && board[a]===board[b] && board[a]===board[c]){
         return board[a]
        }
      }
      return  null
    };
   const winneris = winner(board)
   const { width, height } = useWindowSize()
    return(
      <div>
        {winneris ? <Confetti
      width={width}
      height={height}
    /> : ""}
      <div className='gameboard'>
       {board.map((val, index)=><GameBox val = {val} onplayerclick={()=> handleclick(index)} />)}
      </div>
      {winneris ?<h2>the Winnner is {winneris}</h2>:""}
      </div>
    )
  }
  function GameBox({val, onplayerclick}){
    const styles = {color: val === "X" ? "green":"red"}
    return(
      <div onClick={()=>onplayerclick()} style={styles} className='gameBox'>{val}</div>
    )
  }