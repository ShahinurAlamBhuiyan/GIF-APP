import React, { useState } from "react";
import useGif from './useGif';
const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const {gif, fetchGif} = useGif(tag);
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="Random Gif" width="400" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
    </div>
  );
};
export default Tag;
