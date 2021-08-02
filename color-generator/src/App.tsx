import React, {useState} from 'react';
import './App.css';
import Values from 'values.js';

function App() {
  const [currentColor, setCurrentColor] = useState('#ffc125');
  let color = new Values(currentColor);
  const [colors, setColors] = useState(color.all(10));
  const [error, setError] = useState(false);
  const [formValue, setFormValue] = useState(currentColor);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue.length < 4 || formValue.length > 7) {
      setError(true);
    } else {
      setError(false);
      setCurrentColor(formValue);
      color = new Values(formValue);
      setColors(color.all(10));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  const showMessage = (id: string) => {
    // show message
    document.getElementById(id)?.setAttribute('style', 'display: block');
    navigator.clipboard.writeText(`#${id}`);
    // wait 1 sec
    // hide message
    setTimeout(() => {
      document.getElementById(id)?.setAttribute('style', 'display: none');
    }, 2000);
  };

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
              onClick={() => showMessage(color.hex)}
              key={color.hex}
              style={{
                cursor: 'pointer',
                backgroundColor: `#${color.hex}`,
                color: `${color.type === 'shade' ? '#fff' : '#000'}`,
              }}
              className="color-box"
            >
              <p>#{color.hex}</p>
              <p>{color.weight}%</p>
              {
                <p id={color.hex} className="color-box-copy">
                  COPIED TO CLIPBOARD
                </p>
              }
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
