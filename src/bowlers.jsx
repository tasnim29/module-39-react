import { useState } from "react";

export default function Bowler() {
  const [balls, setBalls] = useState(0);

  const handleBowl = () => {
    const newBallCount = balls + 1;

    setBalls(newBallCount);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        border: "2px solid red",
        padding: "10px",
      }}
    >
      <h2>Name:Brett Lee</h2>
      {balls > 0 && balls % 6 === 0 && <h3>Overs done</h3>}
      <h1>Bowls:{balls}</h1>
      <button onClick={handleBowl}>Ball Button</button>
    </div>
  );
}
