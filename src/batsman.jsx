import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRunFour = runs + 4;
    setRuns(updatedRunFour);
  };
  const handleSix = () => {
    const updatedRunSix = runs + 6;
    const sixNumber = six + 1;
    setSix(sixNumber);
    setRuns(updatedRunSix);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        border: "2px solid red",
        padding: "10px",
      }}
    >
      <h3>Batsman: Hero Ali</h3>
      {runs >= 50 && <p>Half century for Hero Ali :{runs}</p>}
      <h1>Score:{runs}</h1>
      <h2>Sixex:{six}</h2>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
