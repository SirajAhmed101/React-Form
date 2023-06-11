import { useState } from "react";

export default function State() {
  // Counter
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function min() {
    setCount(count - 1);
  }

  return (
    <div className="counter container">
      <button onClick={min} className="counter--minus btn btn-primary">
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button onClick={add} className="counter--plus btn btn-primary">
        +
      </button>
    </div>
  );
}
