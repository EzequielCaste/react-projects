import {useState} from 'react';
import './App.css';
import hexToRGB from './lib/hextoRGB';
import RGBToHSL from './lib/RGBtoHSL';

function App() {
  const [colorState, setColorState] = useState(['#ffc125']);

  // convert HEX to RGB
  let str: any = hexToRGB(colorState[0]); //rgb(245,1,37)

  // divide the string into r, g, b
  str = str.substring(4, str.length - 1).split(',');

  // convert RBG to HSL
  str = RGBToHSL(str); // hsl(43, 100%, 57.3%)

  // split hsl to get only l
  str = str.substring(4, str.length - 1).split(',');
  let l = str[2].replace('%', '').trim();
  let steps = 100 - l;
  //l = Math.floor(Number(l)); // 57
  let increments = (steps / 10).toFixed(2); // 4.27
  let aux = +l;
  let colorArray = [];
  for (let i = 0; i < 10; i++) {
    aux = +aux + +increments;
    colorArray.unshift(Math.ceil(aux));
  }
  colorArray.push(+l);

  increments = (l / 10).toFixed(2);
  aux = +l;
  for (let i = 0; i < 10; i++) {
    aux = +aux - +increments;
    colorArray.push(Math.ceil(aux));
  }
  console.log(colorArray);
  // make HSL 10 darker and 10 lighter
  // increments of 5: 100,96,91,87,83,79,74,70,66,62,57

  return (
    <div className="App">
      <header>
        <div className="form-container">
          <h1>Color Generator</h1>
          <form action="#">
            <input type="text" name="color" id="color" value={colorState[0]} />
            <button>Submit</button>
          </form>
        </div>
      </header>
      <section>
        <div className="color-grid">
          {colorArray.map((color) => (
            <div
              style={{backgroundColor: `hsl(43, 100%, ${color}%)`}}
              className="color-box"
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
