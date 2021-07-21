import React, {useState} from 'react';
import './App.css';
import data from './data';
import {Footer} from './footer';

function App() {
  const [amount, setAmount] = useState(0);
  const [lorem, setLorem] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const generateLorem = () => {
    let array: string[] = [];
    array.push(data[0]);

    for (let i = 1; i < amount; i++) {
      array.push(data[i]);
    }
    setLorem(array);
  };
  return (
    <div className="App">
      <header>
        <h1>React Lorem Generator</h1>
        <div className="form-control">
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min={0}
            max={8}
            value={amount}
            onChange={handleChange}
          />
          <button onClick={generateLorem}>Generate</button>
        </div>
      </header>

      <div className="lorem-container">
        {lorem && lorem.map((lorem, index) => <p key={index}>{lorem}</p>)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
