import { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState("");

  function handle(e) {
    setValue(value + e.target.innerHTML);
  }

  function equal() {
    try {
      setValue((prev) => {
        if (prev.trim() === "") {
          return "";
        }
        const result = Function(`'use strict'; return (${prev})`)();
        return result.toString();
      });
    } catch (error) {
      alert("Invalid Expression");
      setValue("");
    }
  }

  function AC() {
    setValue("");
  }

  function DEL() {
    setValue((prev) => prev.slice(0, -1));
  }

  return (
    <div className="calculator">
      <input type="text" placeholder="0" value={value} readOnly />
      <div className="output"></div>
      <div>
        <button onClick={AC}>AC</button>
        <button onClick={DEL}>DEL</button>
        <button onClick={handle}>%</button>
        <button onClick={handle}>/</button>
      </div>
      <div>
        <button onClick={handle}>1</button>
        <button onClick={handle}>2</button>
        <button onClick={handle}>3</button>
        <button onClick={handle}>*</button>
      </div>
      <div>
        <button onClick={handle}>4</button>
        <button onClick={handle}>5</button>
        <button onClick={handle}>6</button>
        <button onClick={handle}>+</button>
      </div>
      <div>
        <button onClick={handle}>7</button>
        <button onClick={handle}>8</button>
        <button onClick={handle}>9</button>
        <button onClick={handle}>-</button>
      </div>
      <div>
        <button onClick={handle}>.</button>
        <button onClick={handle}>0</button>
        <button id="equal" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
}
export default App;
