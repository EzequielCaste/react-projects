import React, {useEffect, useState} from 'react';
import './App.css';
import Values from 'values.js';

function App() {
  const [currentColor, setCurrentColor] = useState('#ffc125');
  let color = new Values(currentColor);
  const [colors, setColors] = useState(color.all(10));
  const [error, setError] = useState(false);
  const [formValue, setFormValue] = useState(currentColor);

  let colorArray = [];

  useEffect(() => {
    setColors(color.all(10));
  }, [currentColor]);

  // if (error) {
  //   color = new Values(currentColor);
  // }
  // colorArray = color.all(10);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue.length < 4 || formValue.length > 7) {
      setError(true);
    } else {
      setError(false);
      setCurrentColor(formValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  // console.log(color.all(10)); // weight hex

  // color.all(10).forEach((color: {hex: string}) => {
  //   console.log(color.hex);
  // });

  return (
    <div className="App">
      <header>
        <div className="form-container">
          <h1>Color Generator</h1>
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
          {colors.map((color: {weight: string; hex: string; type: string}) => (
            <div
              style={{
                backgroundColor: `#${color.hex}`,
                color: `${color.type === 'shade' ? '#fff' : '#000'}`,
              }}
              className="color-box"
            >
              <p>#{color.hex}</p>
              <p>{color.weight}%</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
