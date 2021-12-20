import * as React from 'react';
import { useState } from "react";

export function Color() {
  const [color, setcolor] = useState("yellow");
  const styles = { backgroundColor: color };
  const [field, setfield] = useState(["red", "blue", "orange", "purple"]);

  return (
    <div className="App">
        <input
          value={color}
          onChange={(event) => setcolor(event.target.value)}
          style={styles}
          placeHolder="Enter the Color" />
        <button onClick={() => setfield([...field, color])}>click me</button>
        {field.map((clr) => (
          <ColorBox clr={clr} />
        ))}
    </div>
  );
}
function ColorBox({ clr }) {
  const styles = {
    height: "30px",
    width: "250px",
    backgroundColor: clr,
    margin: "10px"
  };
  return <div style={styles}></div>;
}
