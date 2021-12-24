import * as React from "react";
import { useState } from "react";
import { Counter } from "./Counter";
import { useHistory } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";

export function Movie({ deletebutton, name, poster, rating, summary, id }) {
  //conditional styling
  const styles = { color: rating > 8 ? "green" : "red" };
  const [show, setshow] = useState(true);
  const history = useHistory();
  // const displays = {display: show ? "block" : "none"};
  return (
    <div className="main">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={poster}
            alt="green iguana"
          />
          <CardContent>
            <div className="sub">
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <p style={styles}>
                <StarIcon />
                {rating}
              </p>
            </div>
            <div className="buttons">
              <button className="btn" onClick={() => setshow(!show)}>
                {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </button>
              <IconButton
                color="info"
                onClick={() => history.push(`/movies/${id}`)}
              >
                <InfoIcon />
              </IconButton>
              <Counter />
              {deletebutton}
            </div>
            {show ? (
              <Typography variant="body2" color="text.secondary">
                {summary}
              </Typography>
            ) : (
              ""
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <Paper elevation={3} />
    </div>
  );
}
