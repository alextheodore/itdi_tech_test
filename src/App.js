import "./styles.css";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const value = e.target.value;
    // Only positive integers
    if (/^\d*$/.test(value)) {
      setNum(value);
    }
  }

  function handleSubmit() {
    if (num === "") {
      setResult(0);
      return;
    }
    const reversed = num.split("").reverse().join("").replace(/^0+/, "");
    const diff = Math.abs(parseInt(num) - parseInt(reversed));
    setResult(diff);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={num} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
