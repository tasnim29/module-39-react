import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Bowler from "./bowlers";

function App() {
  function handleButton1() {
    alert("clicked buttton 1");
  }
  const clickedButtton3 = () => {
    alert("clicked button 3");
  };
  const handleAddNum = (num) => {
    const newNumber = num + 10;
    alert(newNumber);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Bowler></Bowler>
      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleButton1}>Click me 1</button>

      <button
        onClick={function handleButton2() {
          alert("clicked button 2");
        }}
      >
        Click me 2
      </button>
      <button onClick={clickedButtton3}>Click me 3</button>
      <button onClick={() => alert("clicked button 4")}>Click me 4</button>
      {/* below button is wrapped in an arrow function bcz normally we cant use parenthesis */}
      <button onClick={() => handleAddNum(10)}>Click me add</button>
    </>
  );
}

export default App;
