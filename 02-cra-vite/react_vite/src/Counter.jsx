import { useState } from "react";

const Counter = () => {

    const counter = useState(0);
    const increaseValue = () =>{
        counter[1](counter[0] + 1);
    }
    const decreaseValue = () =>{
        counter[1](counter[0] - 1);
    }

  return (
    <div>
      <button onClick={increaseValue}>+</button>
      <h1>{counter[0]}</h1>
      <button onClick={decreaseValue}>-</button>
    </div>
  );
};

export default Counter;
