import React, {useState} from 'react';
import './App.css';
import Values from 'values.js';
import ColorBox from './ColorBox';
import {Color} from './types';

function App() {
  const [currentColor, setCurrentColor] = useState('#ffc125');
  const [colors, setColors] = useState(new Values(currentColor).all(10));
  const [error, setError] = useState(false);
  const [formValue, setFormValue] = useState(currentColor);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue.length < 4 || formValue.length > 7) {
      setError(true);
    } else {
      setError(false);
      setCurrentColor(formValue);
      setColors(new Values(formValue).all(10));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Color Generator</h1>
        <div className="form-container">
          <form action="#" onSubmit={handleSubmit}>
            <input
              style={{border: `${error ? '2px solid red' : ''}`}}
              type="text"
              name="color"
              id="color"
              value={formValue}
              onChange={handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </header>
      <section>
        <div className="color-grid">
          {colors.map((color: Color) => (
            <ColorBox color={color} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
