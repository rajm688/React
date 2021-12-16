import * as React from 'react';
import { useState } from "react";

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div>
      <button className="btn" onClick={() => setlike(like + 1)}><span>👍</span>{like}</button>
      <button className="btn" onClick={() => setdislike(dislike + 1)}><span>👎</span>{dislike}</button>
    </div>
  );
}
