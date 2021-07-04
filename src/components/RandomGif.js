import React from "react";
import useGif from './useGif';
const Random = () => {
  const {gif, fetchGif} = useGif();
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="500" />
      <button onClick={fetchGif}>CLICK FOR NEW</button>
    </div>
  );
};
export default Random;
