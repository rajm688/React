import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import RefreshIcon from "@mui/icons-material/Refresh";
import { GameBox } from "./App";

export function TicTakToe() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXturn, setisXturn] = useState(true);
  const handleclick = (index) => {
    console.log("Clicked", index);
    if (!winneris && !board[index]) {
      const boardcopy = [...board];
      boardcopy[index] = isXturn ? "X" : "O";
      setboard(boardcopy);
      setisXturn(!isXturn);
    }
  };

  const winner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winneris = winner(board);
  const { width, height } = useWindowSize();
  return (
    <div className="outercontainer">
      {winneris ? <Confetti width={width} height={height} /> : ""}
      <div className="gameboard">
        {board.map((val, index) => (
          <GameBox val={val} onplayerclick={() => handleclick(index)} />
        ))}
      </div>
      <div>
        {winneris ? <h2>the Winnner is {winneris}</h2> : ""}
        {winneris ? (
          <Button
            style={{ width: "100%" }}
            className="forward"
            onClick={() =>
              setboard([null, null, null, null, null, null, null, null, null])
            }
            variant="outlined"
          >
            <RefreshIcon />
            Restart
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
