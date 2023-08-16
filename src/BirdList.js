//import { addBird, increaseLike } from "./redux/action";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBird, increaseLike } from "./redux/action";

const BirdList = () => {
  const [bird, setBird] = useState("");
  const Birds = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const handleAddBird = () => {
    if (bird.trim() !== "") {
      dispatch(addBird(bird));
    }
    setBird("");
  };

  return (
    <div>
      <input
        type="text"
        value={bird}
        onChange={(e) => setBird(e.target.value)}
      />
      <button onClick={handleAddBird}>Add</button>

      <ul>
        {Birds.map((bird, index) => (
          <li key={index}>
            <h2>{bird.name}</h2>
            Likes: {bird.likes}
            <button onClick={() => dispatch(increaseLike(index))}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BirdList;
