import logo from "./logo.svg";
import "./App.css";
import { Stepper } from "./components/stepper";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(2);

  const handleClick = (count: any) => {
    setCount(count.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <select onChange={(event) => handleClick(event)}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <Stepper count={count} />
      </header>
    </div>
  );
};

export default App;
